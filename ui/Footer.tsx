import { useTranslation } from 'next-i18next'
import React from 'react'

import { faClock, faFolder, faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className='bg-gradient'>
      <section className='py-20 md:container md:mx-auto'></section>
    </div>
  )
}

export default Footer
