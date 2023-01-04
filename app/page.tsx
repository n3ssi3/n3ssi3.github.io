import About from '@/ui/About'
import Counter from '@/ui/Counter'
import Hero from '@/ui/Hero'
import Portfolio from '@/ui/Portfolio'
import Work from '@/ui/Work'

// import { appWithTranslation } from 'next-i18next'

// const Page = ({ pageProps }) => (
//   <Hero {...pageProps} />
// )

// export default appWithTranslation(Page)

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Counter />
      <Portfolio />
    </>
  )
}
