'use client'

import { useState } from 'react'
import { use } from 'react'
import Link from 'next/link'

const POSTS_PER_PAGE = 9

export default function BlogPage({
  params,
}: {
  params: Promise<{ studio: string }>
}) {
  const resolvedParams = use(params)
  const studioType = resolvedParams.studio as 'yoga' | 'pilates'
  const studioName = studioType.charAt(0).toUpperCase() + studioType.slice(1)
  
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  
  // Placeholder blog posts
  const allPosts = [
    {
      id: '1',
      title: 'The Benefits of Morning Practice',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      excerpt: 'Discover how starting your day with practice can transform your life...',
      featured_image_url: 'https://via.placeholder.com/600x400',
    },
    {
      id: '2',
      title: 'Beginner\'s Guide to ' + studioName,
      author: 'Michael Chen',
      date: '2024-01-10',
      excerpt: 'Everything you need to know to start your journey...',
      featured_image_url: 'https://via.placeholder.com/600x400',
    },
  ]
  
  // Filter posts based on search
  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )
  
  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        {studioName} Blog
      </h1>
      
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md mx-auto block px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {paginatedPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.featured_image_url}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/${studioType}/blog/${post.id}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <div className="text-sm text-gray-600 mb-3">
                By {post.author} • {new Date(post.date).toLocaleDateString()}
              </div>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link
                href={`/${studioType}/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
      
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold mb-4">Share this blog</h3>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Facebook
          </button>
          <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
            Instagram
          </button>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            X (Twitter)
          </button>
        </div>
      </div>
    </div>
  )
}