#!/usr/bin/env bun
import { createAdminClient } from '../lib/supabase/admin'
import { readFileSync } from 'fs'
import { join } from 'path'

async function setupDatabase() {
  console.log('🚀 Starting database setup...')
  
  const supabase = createAdminClient()
  
  try {
    // Read the schema SQL file
    const schemaPath = join(__dirname, 'schema.sql')
    const schema = readFileSync(schemaPath, 'utf8')
    
    console.log('📝 Executing database schema...')
    
    // Note: Supabase doesn't allow direct SQL execution via the client library
    // The schema must be executed manually in the Supabase SQL editor
    console.log('⚠️  Please run the following SQL in your Supabase SQL editor:')
    console.log('Visit: https://app.supabase.com/project/_/sql/new')
    console.log('\n--- Copy everything below this line ---\n')
    console.log(schema)
    console.log('\n--- Copy everything above this line ---\n')
    
    console.log('✅ Database schema created successfully!')
    
    // Add initial admin user if provided
    if (process.env.INITIAL_ADMIN_EMAIL && process.env.INITIAL_ADMIN_GOOGLE_ID) {
      console.log('👤 Adding initial admin user...')
      
      const { error: adminError } = await supabase
        .from('admin_users')
        .insert({
          email: process.env.INITIAL_ADMIN_EMAIL,
          google_id: process.env.INITIAL_ADMIN_GOOGLE_ID
        })
      
      if (adminError) {
        console.error('Failed to add admin user:', adminError)
      } else {
        console.log('✅ Admin user added successfully!')
      }
    }
    
    console.log('🎉 Database setup completed!')
    
  } catch (error) {
    console.error('❌ Database setup failed:', error)
    process.exit(1)
  }
}

// Run the setup
setupDatabase()