# Phoenix Yoga & Pilates Web Site Design Specification

## Introduction

This document outlines the design specifications for the Phoenix Yoga & Pilates website. The site is intended to provide
information about classes, instructors, and the studio's philosophy, as well as to facilitate class bookings and
payments. The design will focus on a clean, modern aesthetic that reflects the tranquility and balance associated with
yoga and pilates.

## Design Goals

1. **User-Friendly Navigation**: Ensure that users can easily find information about classes, instructors, and booking
   options.
2. **Responsive Design**: The site must be fully responsive, providing an optimal viewing experience across a range of
   devices, including desktops, tablets, and smartphones.
3. **Visual Appeal**: Use a calming color palette and high-quality images to create an inviting atmosphere.
4. **Accessibility**: Ensure the site is accessible to all users, including those with disabilities, by following **WCAG
   2.1 Level AA** guidelines.
5. **SEO Optimization**: Implement best practices for search engine optimization, including semantic HTML, meta tags,
   and structured data (Schema.org) to increase visibility in search results.
6. **Performance**: Optimize the site for fast loading times to enhance user experience. The target is to achieve a *
   *Google Lighthouse Performance score of 90+** and ensure **Core Web Vitals** are in the 'Good' threshold.

## Target Audience

The primary target audience includes:

- Individuals interested in yoga and pilates, ranging from beginners to advanced practitioners.
- Local community members looking for wellness and fitness options.
- Potential clients seeking information about class schedules, instructors, and studio philosophy.
- Individuals interested in booking classes online.

## Content Structure

The site will contain an entry point which will direct users to either the Yoga or Pilates studio page. Each studio will
have the same structure, with content tailored to the specific studio's offerings and philosophy. This will create a
cohesive user experience while allowing for distinct branding for each studio.

The website will be structured as follows:

1. **Landing Page**: A welcome page with two main large links in the page center.
    - Link for the Yoga Studio Page
    - Link for the Pilates Studio Page

   1.a **{Yoga|Pilates} Studio Page**
    - Welcome message
    - Promo banner carousel across the top, under the header.
        - Promos are studio-specific and stored in Supabase with the following fields:
            - `title`
            - `description`
            - `image_url`
            - `link_url`
            - `start_date` (nullable)
            - `end_date` (nullable)
        - **Display Logic**: Promos will only display if the current date is between the `start_date` and `end_date`. If
          both dates are null, the promo is considered permanent until deleted.
    - Header:
        - Blog Page link
        - About Page link
        - Team Page link
        - Booking Page link
        - Contact Us Page link

   1.a.1 **Blog Page**
    - List of blog posts with excerpts.
        - Custom blogs stored in Supabase with the following fields:
            - `title`
            - `author`
            - `date`
            - `excerpt`
            - `full_content` (Markdown/Rich Text)
            - `featured_image_url`
    - Search functionality (querying **titles and full content**).
    - Pagination for older posts (defaulting to **9 posts per page**, configurable via a constant).
    - Social media sharing options (**Facebook, Instagram, X/Twitter**, with an architecture that allows for easy
      addition of more platforms).

   1.a.2 **About Page**
    - Studio philosophy
    - Mission statement
    - History of the studio
    - Testimonials from clients
    - *Note: This content will be managed within the Next.js codebase and updated by a developer.*

   1.a.3 **Team Page**
    - Profiles of instructors with photos and bios.
    - Specializations and certifications.
    - The public-facing list of instructors will be ordered **alphabetically by first name**.

   1.a.4 **Booking Page**
    - **Phase 1 Implementation**: The initial integration will use a simple **embedded iFrame** provided by Mindbody to
      display class schedules and handle bookings. All interactions, including payments, will occur within this iFrame.
    - **Phase 2 Enhancement**: A future phase will explore a deeper, direct API integration for a seamless booking
      experience. This will include user account synchronization and integrated payment flows.

   1.a.5 **Contact Us Page**
    - Contact form for inquiries with the following fields: **Name (required), Email (required), Message (required)**.
    - Form submissions will be sent to a designated studio email address and stored in a `submissions` table in
      Supabase.
    - Studio location with embedded Google Maps.
    - Phone number and email address.
    - Social media links.

## Architecture

The website will be built using a modern web stack, ensuring scalability and maintainability.

- **React** for building user interfaces.
- **Typescript** for type safety.
- **Vite** as the build tool for fast development and production builds.
- **Bun** as the package manager.
- **Next.js** for server-side rendering and static site generation.
- **Tailwind CSS** for styling.
- **RxDB** for client-side state management, complementary to Supabase.
- **Supabase** for backend services, including authentication, database management, and real-time data.
- **Mindbody API** integration (iFrame for Phase 1).
- **Vercel** for deployment.

### Shared Architecture

As the site is two copies of the same site structure, the architecture will be designed for reusability:

- A shared component library for common elements.
- A shared styles directory for common CSS styles.
- A shared application logic layer for common functionality.

### Admin Panel (`/admin`)

There will be a `/admin` route for managing the site's dynamic content.

- **Authentication**: The `/admin` route will be protected. Access will be granted via **Google Authentication** and
  restricted to a **whitelist of Google user accounts** managed in Supabase. Authenticated users will have a single 
  `admin` role with full content editing capabilities.
- **Promotional Content Management**: Admins can create, update, and delete promotional banners for each studio page.
- **Blog Management**: Admins can create, update, and delete blog posts.
- **Instructor Management**: Admins can add, update, and remove instructor profiles. The admin interface will allow
  linking an instructor to one or both studios (Yoga, Pilates).