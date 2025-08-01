import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Get counts for dashboard
  const [promotions, blogPosts, instructors, submissions] = await Promise.all([
    supabase.from('promotions').select('id', { count: 'exact', head: true }),
    supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
    supabase.from('instructors').select('id', { count: 'exact', head: true }),
    supabase.from('contact_submissions').select('id', { count: 'exact', head: true }),
  ]);

  const stats = [
    { name: 'Total Promotions', value: promotions.count || 0, href: '/admin/promotions' },
    { name: 'Total Blog Posts', value: blogPosts.count || 0, href: '/admin/blog' },
    { name: 'Total Instructors', value: instructors.count || 0, href: '/admin/instructors' },
    { name: 'Contact Submissions', value: submissions.count || 0, href: '/admin/submissions' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

      <div className="mt-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <Link href={stat.href} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all<span className="sr-only"> {stat.name}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/admin/promotions/new"
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex-1 min-w-0">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">Add New Promotion</p>
              <p className="text-sm text-gray-500">Create a new promotional banner</p>
            </div>
          </Link>

          <Link
            href="/admin/blog/new"
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex-1 min-w-0">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">Write Blog Post</p>
              <p className="text-sm text-gray-500">Create a new blog article</p>
            </div>
          </Link>

          <Link
            href="/admin/instructors/new"
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex-1 min-w-0">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">Add Instructor</p>
              <p className="text-sm text-gray-500">Add a new instructor profile</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
