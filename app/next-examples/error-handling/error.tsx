'use client'

import React from 'react'

import { Boundary } from '@/ui/Boundary'
import Button from '@/ui/Button'

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log('logging error:', error)
  }, [error])

  return (
    <Boundary labels={['Home page Error UI']} color='pink'>
      <div className='space-y-4'>
        <div className='text-sm text-vercel-pink'>
          <strong className='font-bold'>Error:</strong> {error?.message}
        </div>
        <div>
          <Button onClick={() => reset()}>Try Again</Button>
        </div>
      </div>
    </Boundary>
  )
}
