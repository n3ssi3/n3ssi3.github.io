import { useTranslation } from 'next-i18next'
import React from 'react'

const Portfolio = () => {
  const { t } = useTranslation()
  return (
    <section className='md:container md:mx-auto'>
      <h2 id='portfolio' className='sr-only'>
        {t('portfolio.title')}
      </h2>
      <div className='title-main'>
        <h4>
          {t('portfolio.subtitle1')}
          <strong>{t('portfolio.subtitle2')}</strong>
        </h4>
      </div>
    </section>
  )
}

export default Portfolio
