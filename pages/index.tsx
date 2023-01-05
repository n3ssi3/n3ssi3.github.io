import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Inter } from '@next/font/google'

import About from '../components/About'
import Counter from '../components/Counter'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio'
import Work from '../components/Work'
import { GetServerSideProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ ...pageProps }) {
  return (
    <Layout>
      <Hero {...pageProps} />
      <About {...pageProps} />
      <Work {...pageProps} />
      <Counter {...pageProps} />
      <Portfolio {...pageProps} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'hero']))
    }
  }
}
