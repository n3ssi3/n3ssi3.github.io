import { cookies, headers, previewData } from 'next/headers'
import React from 'react'

const HooksServer = () => {
  return (
    <div className='overflow-x-auto rounded-xl py-4 px-2 text-sm dark:text-white [color-scheme:dark]'>
      <pre>
        {JSON.stringify(
          {
            cookies: cookies(),
            useHeaders: headers(),
            usePreviewData: previewData()
          },
          null,
          2
        )}
      </pre>
    </div>
  )
}

export default HooksServer
