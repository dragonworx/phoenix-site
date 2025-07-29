-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE studio_type AS ENUM ('yoga', 'pilates');

-- Admin users table (Google OAuth whitelist)
CREATE TABLE admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    google_id TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP WITH TIME ZONE
);

-- Promos table
CREATE TABLE promos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    studio_type studio_type NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    link_url TEXT NOT NULL,
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Blog posts table
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    studio_type studio_type NOT NULL,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    date DATE NOT NULL,
    excerpt TEXT NOT NULL,
    full_content TEXT NOT NULL,
    featured_image_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Instructors table
CREATE TABLE instructors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    bio TEXT NOT NULL,
    photo_url TEXT NOT NULL,
    specializations TEXT[] DEFAULT '{}',
    certifications TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Instructor studios junction table
CREATE TABLE instructor_studios (
    instructor_id UUID REFERENCES instructors(id) ON DELETE CASCADE,
    studio studio_type NOT NULL,
    PRIMARY KEY (instructor_id, studio)
);

-- Contact submissions table
CREATE TABLE contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    studio_type studio_type NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX idx_promos_studio_type ON promos(studio_type);
CREATE INDEX idx_promos_dates ON promos(start_date, end_date);
CREATE INDEX idx_blog_posts_studio_type ON blog_posts(studio_type);
CREATE INDEX idx_blog_posts_date ON blog_posts(date DESC);
CREATE INDEX idx_contact_submissions_studio_type ON contact_submissions(studio_type);
CREATE INDEX idx_instructor_studios_studio ON instructor_studios(studio);

-- Create update trigger for updated_at columns
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_promos_updated_at BEFORE UPDATE ON promos
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_instructors_updated_at BEFORE UPDATE ON instructors
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE promos ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE instructors ENABLE ROW LEVEL SECURITY;
ALTER TABLE instructor_studios ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Public read access for promos
CREATE POLICY "Public can view active promos" ON promos
    FOR SELECT USING (true);

-- Public read access for blog posts
CREATE POLICY "Public can view blog posts" ON blog_posts
    FOR SELECT USING (true);

-- Public read access for instructors
CREATE POLICY "Public can view instructors" ON instructors
    FOR SELECT USING (true);

CREATE POLICY "Public can view instructor studios" ON instructor_studios
    FOR SELECT USING (true);

-- Public can submit contact forms
CREATE POLICY "Public can submit contact forms" ON contact_submissions
    FOR INSERT WITH CHECK (true);

-- Admin policies (authenticated users in admin_users table)
CREATE POLICY "Admins can manage promos" ON promos
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users
            WHERE admin_users.email = auth.jwt() ->> 'email'
        )
    );

CREATE POLICY "Admins can manage blog posts" ON blog_posts
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users
            WHERE admin_users.email = auth.jwt() ->> 'email'
        )
    );

CREATE POLICY "Admins can manage instructors" ON instructors
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users
            WHERE admin_users.email = auth.jwt() ->> 'email'
        )
    );

CREATE POLICY "Admins can manage instructor studios" ON instructor_studios
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users
            WHERE admin_users.email = auth.jwt() ->> 'email'
        )
    );

CREATE POLICY "Admins can view contact submissions" ON contact_submissions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM admin_users
            WHERE admin_users.email = auth.jwt() ->> 'email'
        )
    );

CREATE POLICY "Admins can manage admin users" ON admin_users
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users
            WHERE admin_users.email = auth.jwt() ->> 'email'
        )
    );