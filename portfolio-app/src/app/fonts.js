import { Sometype_Mono, IBM_Plex_Sans } from 'next/font/google'
 
export const Sometype = Sometype_Mono({
  subsets: ['latin'],
  variable: '--font-sometype',
  display: 'swap',
})
 
export const plex_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plex-sans',
  weight: ['100','200','300', '400','500','600', '700'],
})