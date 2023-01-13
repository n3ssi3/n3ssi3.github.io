import { useTranslation } from 'next-i18next'
import React from 'react'

const Counter = () => {
  const { t } = useTranslation()
  return (
    <div className='bg-gradient h-96 mb-96'>
      <section className='md:container md:mx-auto'>
        <h2 id='counter' className='sr-only'>
          {t('counter.title')}
        </h2>
      </section>
    </div>
  )
}

export default Counter
