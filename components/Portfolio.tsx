import { useTranslation } from 'next-i18next'
import React from 'react'

const Portfolio = () => {
  const { t } = useTranslation()
  return (
    <section className='md:container md:mx-auto'>
      <h2 id='portfolio' className='sr-only'>
        {t('portfolio.title')}
      </h2>
    </section>
  )
}

export default Portfolio
