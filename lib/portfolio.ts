export type PageProps = {
  params?: any
  children?: React.ReactNode
}
export type Portfolio = {
  title: string
  image: string
  url: string
  categroy: string
  clsx?: string
}

export const getPortfolio = (): Portfolio[] => [
  {
    title: 'Illustration Collection 2021',
    image: 'https://res.cloudinary.com/imajin/image/upload/v1583588473/profile/port2_kxnhhq.jpg',
    url: 'linkofthisitem.com',
    categroy: 'cat1',
    clsx: 'short'
  },
  {
    image: 'https://res.cloudinary.com/imajin/image/upload/v1583588473/profile/port1_fxr9tj.jpg',
    title: 'IFF - Branding & Website',
    url: 'linkofthisitem.com',
    categroy: 'cat1',
    clsx: 'long'
  },
  {
    image: 'https://res.cloudinary.com/imajin/image/upload/v1583588473/profile/port3_xavvlu.jpg',
    title: 'Personal Works',
    url: 'linkofthisitem.com',
    categroy: 'cat1'
  },
  {
    image: 'https://res.cloudinary.com/imajin/image/upload/v1583930319/profile/port4_prba13.jpg',
    title: 'Lay-Out / Art book',
    url: 'linkofthisitem.com',
    categroy: 'cat1'
  },
  {
    image: 'https://res.cloudinary.com/imajin/image/upload/v1583588474/profile/port6_rzzgf0.jpg',
    title: 'France Universités - Brand design',
    url: 'linkofthisitem.com',
    categroy: 'cat1'
  },
  {
    image: 'https://res.cloudinary.com/imajin/image/upload/v1583588473/profile/port5_sqeczs.jpg',
    title: 'U. Furstenberg - Identity & stationery',
    url: 'linkofthisitem.com',
    categroy: 'cat1',
    clsx: 'long'
  },
  {
    image: 'https://res.cloudinary.com/imajin/image/upload/v1583588473/profile/port1_fxr9tj.jpg',
    title: 'NUEN - Brand Identity',
    url: 'linkofthisitem.com',
    categroy: 'cat1',
    clsx: 'wide'
  },
  {
    image: 'https://res.cloudinary.com/imajin/image/upload/v1583588473/profile/port3_xavvlu.jpg',
    title: 'Coffee Fields Forever',
    url: 'linkofthisitem.com',
    categroy: 'cat1'
  },
  {
    image: 'https://res.cloudinary.com/imajin/image/upload/v1583588473/profile/port2_kxnhhq.jpg',
    title: 'ANTA2022',
    url: 'linkofthisitem.com',
    categroy: 'cat1'
  }
]

export async function fetchPortfoliobyCategory(cat: string | undefined) {
  // Assuming it always return expected categories
  return getPortfolio().find(portfolio => portfolio.categroy === cat)
}

export async function fetchPortfolio(): Promise<Portfolio[]> {
  return getPortfolio()
}
