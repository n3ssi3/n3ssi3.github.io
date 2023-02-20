import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'

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

        {portfolio && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {portfolio.map((item: PortfolioType, i) => (
              <div
                key={i}
                className={clsx('relative min-h-[240px]', item.clsx, {
                  'lg:row-span-2': item?.clsx === 'long',
                  'lg:col-span-2': item?.clsx === 'wide'
                })}
                data-category={item.categroy}
                style={{ transitionDuration: `${i * 0.125}s` }}>
                <div className='flex img-thumb m-0 h-full w-full'>
                  <div
                    className='inline-block h-full w-full'
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundImage: `url(${item.image})`
                    }}
                  />
                  <div className='absolute detail transition duration-150 ease-out hover:ease-in h-full w-full bottom-0 opacity-0 flex flex-col justify-center p-4'>
                    <h3 className='text-white relative text-xl mb-4'>{item.title}</h3>
                    <a
                      href={item.url}
                      target='_blank'
                      rel='noreferrer'
                      className='text-white relative text-lg'>
                      {item.url}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
