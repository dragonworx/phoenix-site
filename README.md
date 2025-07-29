# Phoenix Yoga & Pilates Website

A modern web application for Phoenix Yoga & Pilates studios built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Prerequisites

- Node.js 18+ or Bun runtime
- Supabase account
- Google Cloud Console account (for OAuth)
- Mindbody account (for class booking integration)

## Getting Started

1. **Clone the repository and install dependencies:**

```bash
bun install
```

2. **Set up environment variables:**

Copy `.env.local.example` to `.env.local` and fill in your credentials:

```bash
cp .env.local.example .env.local
```

3. **Set up Supabase:**

- Create a new Supabase project
- Copy the SQL from `scripts/schema.sql` and run it in the Supabase SQL editor
- Note your project URL and anon key for the environment variables

4. **Configure Google OAuth:**

- Set up a Google Cloud project
- Enable Google Sign-In API
- Configure OAuth consent screen
- Create OAuth 2.0 credentials
- Add authorized redirect URIs

5. **Set up the database:**

```bash
bun run db:setup
```

6. **Seed the database with sample data (optional):**

```bash
bun run db:seed
```

7. **Run the development server:**

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
phoenix/
├── app/              # Next.js app directory
│   ├── [studio]/    # Dynamic routes for yoga/pilates
│   ├── admin/       # Admin panel (coming soon)
│   └── page.tsx     # Landing page
├── components/      # React components
│   ├── shared/      # Shared components
│   ├── yoga/        # Yoga-specific components
│   └── pilates/     # Pilates-specific components
├── lib/             # Library code
│   ├── supabase/    # Supabase client configurations
│   └── rxdb/        # RxDB setup (coming soon)
├── scripts/         # Database scripts
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run typecheck` - Run TypeScript type checking
- `bun run db:setup` - Initialize database schema
- `bun run db:seed` - Seed database with sample data
- `bun run db:migrate` - Run database migrations

## Configuration Requirements

### Supabase Setup

1. Enable Row Level Security (RLS) on all tables
2. Configure authentication providers if needed
3. Set up storage buckets for images

### Google Maps Integration

- Obtain a Google Maps API key
- Enable Maps JavaScript API
- Add your domain to authorized referrers

### Mindbody Integration

- Obtain iFrame URLs for both yoga and pilates studios
- Configure allowed domains in Mindbody settings

## Environment Variables

See `.env.local.example` for all required environment variables.

## Deployment

The application is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

## Third-Party Integrations

- **Supabase**: Backend services, authentication, and database
- **Google OAuth**: Admin authentication
- **Mindbody**: Class booking system (Phase 1: iFrame integration)
- **Google Maps**: Location display
- **RxDB**: Client-side state management (implementation pending)
