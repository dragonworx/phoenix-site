-- Just create the admin whitelist table if it doesn't exist
CREATE TABLE IF NOT EXISTS admin_whitelist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE admin_whitelist ENABLE ROW LEVEL SECURITY;

-- Drop and recreate the policy
DROP POLICY IF EXISTS "Service role can manage admin whitelist" ON admin_whitelist;
CREATE POLICY "Service role can manage admin whitelist" ON admin_whitelist
  FOR ALL USING (auth.role() = 'service_role');

-- Check if table was created
SELECT 'Admin whitelist table ready!' as status,
       COUNT(*) as existing_admins 
FROM admin_whitelist;