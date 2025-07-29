import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

// Load environment variables
config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function addAdmin(email: string) {
  // First, let's check if the table exists
  const { data: testData, error: testError } = await supabase
    .from('admin_whitelist')
    .select('*')
    .limit(1)
  
  if (testError) {
    console.error('Error accessing admin_whitelist table:')
    console.error('Code:', testError.code)
    console.error('Message:', testError.message)
    console.error('Details:', testError.details)
    console.error('\nMake sure you have run the SQL setup script in Supabase first!')
    console.error('Go to Supabase Dashboard > SQL Editor and run the contents of scripts/setup-admin-tables.sql')
    return
  }

  // Check if email already exists
  const { data: existing } = await supabase
    .from('admin_whitelist')
    .select('email')
    .eq('email', email)
    .single()
  
  if (existing) {
    console.log('Email already exists in whitelist:', email)
    return
  }

  // Add the email
  const { data, error } = await supabase
    .from('admin_whitelist')
    .insert({ email })
    .select()
    .single()

  if (error) {
    console.error('Error adding admin:')
    console.error('Code:', error.code)
    console.error('Message:', error.message)
    console.error('Details:', error.details)
    return
  }

  console.log('Admin added successfully:', data)
}

// Get email from command line argument
const email = process.argv[2]

if (!email) {
  console.error('Please provide an email address')
  console.log('Usage: bun run scripts/add-admin.ts <email>')
  process.exit(1)
}

addAdmin(email)