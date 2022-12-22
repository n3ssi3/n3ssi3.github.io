import React from 'react'

import { Boundary } from '@/ui/Boundary'

export default function Template({ children }: { children: React.ReactNode }) {
  return <Boundary>{children}</Boundary>
}
