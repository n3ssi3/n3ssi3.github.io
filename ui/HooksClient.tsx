'use client'

import { usePathname, useSearchParams, useSelectedLayoutSegments } from 'next/navigation'
import React from 'react'

const HooksClient = () => {
  const pathname = usePathname()
  const selectedLayoutSegments = useSelectedLayoutSegments()
  const searchParams = useSearchParams()
  const searchParam = searchParams.get('key')

  return (
    <div className='overflow-x-auto rounded-xl py-4 px-2 text-sm dark:text-white [color-scheme:dark]'>
      <pre>
        {JSON.stringify(
          {
            usePathname: pathname,
            selectedLayoutSegments: selectedLayoutSegments,
            useSearchParams: searchParams,
            "useSearchParam('key')": searchParam,
            useRouter: {
              push: '(string) => void',
              softPush: '(string) => void',
              replace: '(string) => void',
              softReplace: '(string) => void',
              reload: '() => void',
              prefetch: '() => Promise<void>'
            }
          },
          null,
          2
        )}
      </pre>
    </div>
  )
}

export default HooksClient
