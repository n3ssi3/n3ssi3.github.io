import { GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Inter } from '@next/font/google'

import About from '../../components/About'
import Counter from '../../components/Counter'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import Portfolio from '../../components/Portfolio'
import Work from '../../components/Work'
import { getI18nPaths, i18nConfig } from '../../getI18nPaths'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Work />
      <Counter />
      <Portfolio />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: false,
  paths: getI18nPaths()
})

export const getStaticProps = async ({ params: { locale = 'en' } }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], i18nConfig))
    }
  }
}