import { NextAuthOptions, DefaultSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false
      
      // Check if user is in admin whitelist
      const { data: adminUser } = await supabase
        .from('admin_whitelist')
        .select('email')
        .eq('email', user.email)
        .single()
      
      return !!adminUser
    },
    async session({ session, token }) {
      if (session?.user?.email) {
        // Check admin status
        const { data: adminUser } = await supabase
          .from('admin_whitelist')
          .select('email')
          .eq('email', session.user.email)
          .single()
        
        session.user.isAdmin = !!adminUser
      }
      return session
    }
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/error',
  },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET
}

// Type augmentation for session
declare module 'next-auth' {
  interface Session {
    user: {
      isAdmin?: boolean
    } & DefaultSession['user']
  }
}