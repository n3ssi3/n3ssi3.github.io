import React from 'react'

import '@/styles/dist.css'
import AddressBar from '@/ui/AddressBar'

import GlobalNav from './GlobalNav'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8'>
      <div className='col-start-2'>
        <GlobalNav />
      </div>

      <div className='col-start-3 space-y-6'>
        <AddressBar />

        <div className='rounded-xl border border-zinc-800 p-8 dark:bg-black'>{children}</div>
      </div>
    </div>
  )
}
