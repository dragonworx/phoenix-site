#!/usr/bin/env bun
import { createAdminClient } from '../lib/supabase/admin'

async function seedDatabase() {
  console.log('🌱 Starting database seeding...')
  
  const supabase = createAdminClient()
  
  try {
    // Seed sample promos
    console.log('📢 Seeding promos...')
    const { error: promosError } = await supabase
      .from('promos')
      .insert([
        {
          studio_type: 'yoga',
          title: 'New Student Special',
          description: '30 days unlimited classes for $30',
          image_url: 'https://via.placeholder.com/800x400',
          link_url: '/yoga/booking',
          start_date: new Date().toISOString(),
          end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          studio_type: 'pilates',
          title: 'Summer Body Challenge',
          description: 'Join our 6-week transformation program',
          image_url: 'https://via.placeholder.com/800x400',
          link_url: '/pilates/booking'
        }
      ])
    
    if (promosError) throw promosError
    
    // Seed sample blog posts
    console.log('📝 Seeding blog posts...')
    const { error: blogError } = await supabase
      .from('blog_posts')
      .insert([
        {
          studio_type: 'yoga',
          title: 'The Benefits of Morning Yoga Practice',
          author: 'Sarah Johnson',
          date: new Date().toISOString().split('T')[0],
          excerpt: 'Discover how starting your day with yoga can transform your life...',
          full_content: 'Starting your day with yoga practice has numerous benefits for both body and mind. From increased flexibility to improved mental clarity, morning yoga sets a positive tone for the entire day...',
          featured_image_url: 'https://via.placeholder.com/600x400'
        },
        {
          studio_type: 'pilates',
          title: 'Core Strength: The Foundation of Movement',
          author: 'Michael Chen',
          date: new Date().toISOString().split('T')[0],
          excerpt: 'Understanding why core strength is essential for overall fitness...',
          full_content: 'Core strength is not just about having visible abs. It\'s about creating a stable foundation for all movement patterns in daily life and athletic performance...',
          featured_image_url: 'https://via.placeholder.com/600x400'
        }
      ])
    
    if (blogError) throw blogError
    
    // Seed sample instructors
    console.log('👥 Seeding instructors...')
    const instructors = [
      {
        first_name: 'Emma',
        last_name: 'Wilson',
        bio: 'Certified yoga instructor with 10 years of experience in Vinyasa and Hatha yoga.',
        photo_url: 'https://via.placeholder.com/300x300',
        specializations: ['Vinyasa', 'Hatha', 'Meditation'],
        certifications: ['RYT-500', 'E-RYT 200']
      },
      {
        first_name: 'David',
        last_name: 'Martinez',
        bio: 'Pilates expert specializing in rehabilitation and athletic performance.',
        photo_url: 'https://via.placeholder.com/300x300',
        specializations: ['Mat Pilates', 'Reformer', 'Rehabilitation'],
        certifications: ['PMA-CPT', 'NCPT']
      }
    ]
    
    for (const instructor of instructors) {
      const { data, error } = await supabase
        .from('instructors')
        .insert(instructor)
        .select()
        .single()
      
      if (error) throw error
      
      // Link instructors to studios
      if (data) {
        const studios = instructor.first_name === 'Emma' ? ['yoga'] : ['pilates']
        
        const { error: linkError } = await supabase
          .from('instructor_studios')
          .insert(
            studios.map(studio => ({
              instructor_id: data.id,
              studio
            }))
          )
        
        if (linkError) throw linkError
      }
    }
    
    console.log('✅ Database seeding completed successfully!')
    
  } catch (error) {
    console.error('❌ Database seeding failed:', error)
    process.exit(1)
  }
}

// Run the seeding
seedDatabase()