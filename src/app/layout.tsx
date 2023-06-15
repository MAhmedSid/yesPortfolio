import './globals.css'
import { Poppins } from 'next/font/google'
import React from 'react';
import GoogleAnalytics from '@/lib/GoogleAnalytics';


const poppins = Poppins({ subsets: ['latin'], weight:["400","700"],preload:true ,adjustFontFallback: true,style:"normal",fallback: ['system-ui', 'arial']})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth'  lang="en">
       <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      <body  className={poppins.className}>
      {children}
      </body>
    </html>
  )
}
