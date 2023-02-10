import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { type Portfolio as PortfolioType, fetchPortfolio } from '@/lib/portfolio'

const Portfolio = () => {
  const { t } = useTranslation()

  const [portfolio, setPortfolio] = useState<PortfolioType[]>()
  fetchPortfolio().then((p: PortfolioType[]) => setPortfolio(p))

  return (
    <section className='py-20 md:container md:mx-auto'>
      <h2 id='portfolio' className='sr-only'>
        {t('portfolio.title')}
      </h2>
      <div className='title-main'>
        <h4>
          {t('portfolio.subtitle1')}
          <strong>{t('portfolio.subtitle2')}</strong>
        </h4>
      </div>
      <div className='hidden-xs-down'>
        {/* <div className='filter'>
          <button className='btn bg-gradient waves-effect selected' data-filter='all'>
            All
          </button>
          <button className='btn bg-gradient waves-effect' data-filter='cat1'>
            Category 1
          </button>
        </div> */}
        {!portfolio?.length && (
          <p className='overline text-center hide' id='no_data'>
            {t('No data to display yet')}
          </p>
        )}

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter='1rem'>
            {portfolio?.map((item: PortfolioType, i) => (
              <div
                key={i}
                className='item loaded'
                data-category={item.categroy}
                style={{ transitionDuration: `${i * 0.125}s` }}>
                <div
                  className={clsx('card img-thumb', item.clsx, {
                    short: !item.clsx
                  })}>
                  <div className='figure'>
                    <div className='img' style={{ backgroundImage: `url(${item.image})` }} />
                  </div>
                  <div className='detail'>
                    <h6 className='use-text-subtitle'>{item.title}</h6>
                    <a href={item.url} target='_blank' rel='noreferrer'>
                      {item.url}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  )
}

export default Portfolio
