import { createClient } from '@/lib/supabase/server'
import type { Promotion } from '@/types/database'

export default async function PromotionsPage() {
  const supabase = await createClient()
  
  const { data: promotions, error } = await supabase
    .from('promotions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error loading promotions:', error)
  }

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Promotions</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage promotional banners for both Yoga and Pilates studios
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <a
            href="/admin/promotions/new"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add promotion
          </a>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Studio
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Active Period
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {promotions?.map((promotion: Promotion) => {
                  const now = new Date()
                  const startDate = promotion.start_date ? new Date(promotion.start_date) : null
                  const endDate = promotion.end_date ? new Date(promotion.end_date) : null
                  const isActive = (!startDate || startDate <= now) && (!endDate || endDate >= now)
                  
                  return (
                    <tr key={promotion.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {promotion.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                          {promotion.studio_type}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {startDate && endDate ? (
                          <span>
                            {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
                          </span>
                        ) : (
                          <span>Always active</span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {isActive ? (
                          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            Inactive
                          </span>
                        )}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href={`/admin/promotions/${promotion.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {promotion.title}</span>
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {(!promotions || promotions.length === 0) && (
              <div className="text-center py-12">
                <p className="text-sm text-gray-500">No promotions found. Create your first promotion to get started.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}