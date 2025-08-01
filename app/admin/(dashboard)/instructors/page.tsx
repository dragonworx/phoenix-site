import { createClient } from '@/lib/supabase/server'
import type { Instructor } from '@/types/database'
import Link from 'next/link'
import Image from 'next/image'

export default async function InstructorsPage() {
  const supabase = await createClient()

  const { data: instructors, error } = await supabase
    .from('instructors')
    .select('*')
    .order('first_name', { ascending: true })

  if (error) {
    console.error('Error loading instructors:', error)
  }

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Instructors</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage instructor profiles for both Yoga and Pilates studios
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            href="/admin/instructors/new"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add instructor
          </Link>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Teaches
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Specializations
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Certifications
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {instructors?.map((instructor: Instructor) => (
                  <tr key={instructor.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      <div className="flex items-center">
                        {instructor.photo_url && (
                          <Image
                            className="h-10 w-10 rounded-full mr-3"
                            src={instructor.photo_url}
                            alt={`${instructor.first_name} ${instructor.last_name}`}
                            width={40}
                            height={40}
                          />
                        )}
                        <div>
                          <div className="font-medium text-gray-900">
                            {instructor.first_name} {instructor.last_name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="flex gap-2">
                        {instructor.teaches_yoga && (
                          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Yoga
                          </span>
                        )}
                        {instructor.teaches_pilates && (
                          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            Pilates
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      <div className="max-w-xs">
                        {instructor.specializations?.length > 0 ? (
                          <span className="text-xs">{instructor.specializations.join(', ')}</span>
                        ) : (
                          <span className="text-gray-400">None</span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      <div className="max-w-xs">
                        {instructor.certifications?.length > 0 ? (
                          <span className="text-xs">{instructor.certifications.join(', ')}</span>
                        ) : (
                          <span className="text-gray-400">None</span>
                        )}
                      </div>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href={`/admin/instructors/${instructor.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {instructor.first_name} {instructor.last_name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {(!instructors || instructors.length === 0) && (
              <div className="text-center py-12">
                <p className="text-sm text-gray-500">No instructors found. Add your first instructor to get started.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
