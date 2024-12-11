import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const ppneuemontreal = localFont({
  src: [
    {
      path: './PP_Neue_Montreal/ppneuemontreal-book.woff',
      weight: '400',
    },
    {
      path: './PP_Neue_Montreal/ppneuemontreal-medium.otf',
      weight: '500',
    },
    {
      path: './PP_Neue_Montreal/ppneuemontreal-bold.otf',
      weight: '700',
    },
    {
      path: './PP_Neue_Montreal/ppneuemontreal-thin.otf',
      weight: '200',
    },
  ],
  display: 'swap',
  preload: true,
  variable: '--font-ppneuemontreal',
})

const fontClasses = `${ppneuemontreal.variable} ${inter.variable} font-ppneuemontreal`

export default fontClasses
