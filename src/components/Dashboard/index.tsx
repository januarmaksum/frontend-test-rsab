import React from 'react'

export default function Dashboard() {
  return (
    <>
      <aside className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'>
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Healt Unit</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" /> </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <ul role="list" className="p-6 divide-y divide-slate-200">
          <li className="flex py-4 first:pt-0 last:pb-0">
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900 uppercase">Urologi</p>
              <p className="text-sm text-slate-500 truncate"></p>
            </div>
          </li>
          <li className="flex py-4 first:pt-0 last:pb-0">
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900 uppercase">Urologi</p>
              <p className="text-sm text-slate-500 truncate"></p>
            </div>
          </li>
          <li className="flex py-4 first:pt-0 last:pb-0">
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900 uppercase">Urologi</p>
              <p className="text-sm text-slate-500 truncate"></p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
