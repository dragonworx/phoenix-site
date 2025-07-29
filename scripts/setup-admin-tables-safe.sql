-- Create admin whitelist table
CREATE TABLE IF NOT EXISTS admin_whitelist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create promotional content table
CREATE TABLE IF NOT EXISTS promotions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  studio_type TEXT NOT NULL CHECK (studio_type IN ('yoga', 'pilates')),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  link_url TEXT,
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  studio_type TEXT NOT NULL CHECK (studio_type IN ('yoga', 'pilates')),
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  excerpt TEXT,
  full_content TEXT NOT NULL,
  featured_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create instructors table
CREATE TABLE IF NOT EXISTS instructors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  bio TEXT,
  photo_url TEXT,
  specializations TEXT[],
  certifications TEXT[],
  teaches_yoga BOOLEAN DEFAULT FALSE,
  teaches_pilates BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  studio_type TEXT NOT NULL CHECK (studio_type IN ('yoga', 'pilates')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (safe to run multiple times)
ALTER TABLE admin_whitelist ENABLE ROW LEVEL SECURITY;
ALTER TABLE promotions ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE instructors ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist and recreate them
DROP POLICY IF EXISTS "Service role can manage admin whitelist" ON admin_whitelist;
CREATE POLICY "Service role can manage admin whitelist" ON admin_whitelist
  FOR ALL USING (auth.role() = 'service_role');

DROP POLICY IF EXISTS "Anyone can view active promotions" ON promotions;
CREATE POLICY "Anyone can view active promotions" ON promotions
  FOR SELECT USING (
    (start_date IS NULL OR start_date <= CURRENT_DATE) AND
    (end_date IS NULL OR end_date >= CURRENT_DATE)
  );

DROP POLICY IF EXISTS "Anyone can view blog posts" ON blog_posts;
CREATE POLICY "Anyone can view blog posts" ON blog_posts
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Anyone can view instructors" ON instructors;
CREATE POLICY "Anyone can view instructors" ON instructors
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Service role can manage promotions" ON promotions;
CREATE POLICY "Service role can manage promotions" ON promotions
  FOR ALL USING (auth.role() = 'service_role');

DROP POLICY IF EXISTS "Service role can manage blog posts" ON blog_posts;
CREATE POLICY "Service role can manage blog posts" ON blog_posts
  FOR ALL USING (auth.role() = 'service_role');

DROP POLICY IF EXISTS "Service role can manage instructors" ON instructors;
CREATE POLICY "Service role can manage instructors" ON instructors
  FOR ALL USING (auth.role() = 'service_role');

DROP POLICY IF EXISTS "Service role can view submissions" ON contact_submissions;
CREATE POLICY "Service role can view submissions" ON contact_submissions
  FOR SELECT USING (auth.role() = 'service_role');

DROP POLICY IF EXISTS "Anyone can create contact submissions" ON contact_submissions;
CREATE POLICY "Anyone can create contact submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Create or replace the trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing triggers if they exist and recreate them
DROP TRIGGER IF EXISTS update_admin_whitelist_updated_at ON admin_whitelist;
CREATE TRIGGER update_admin_whitelist_updated_at BEFORE UPDATE ON admin_whitelist
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_promotions_updated_at ON promotions;
CREATE TRIGGER update_promotions_updated_at BEFORE UPDATE ON promotions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_instructors_updated_at ON instructors;
CREATE TRIGGER update_instructors_updated_at BEFORE UPDATE ON instructors
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Check if tables were created successfully
SELECT 'Tables created successfully!' as status,
       (SELECT COUNT(*) FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name IN ('admin_whitelist', 'promotions', 'blog_posts', 'instructors', 'contact_submissions')) as table_count;