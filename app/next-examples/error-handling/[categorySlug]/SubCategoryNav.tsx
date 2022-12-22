'use client'

import { useSelectedLayoutSegments } from 'next/navigation'

import { type Category } from '@/lib/getCategories'
import { TabNavItem } from '@/ui/TabNavItem'

const SubCategoryNav = ({ category }: { category: Category }) => {
  const [selectedLayoutSegments] = useSelectedLayoutSegments()

  return (
    <div className='flex items-center space-x-4'>
      <TabNavItem href={`/error-handling/${category.slug}`} isActive={!selectedLayoutSegments}>
        All
      </TabNavItem>

      {category.items.map(item => (
        <TabNavItem
          key={item.slug}
          href={`/error-handling/${category.slug}/${item.slug}`}
          isActive={item.slug === selectedLayoutSegments}>
          {item.name}
        </TabNavItem>
      ))}
    </div>
  )
}

export default SubCategoryNav
