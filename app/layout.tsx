import type { Metadata } from 'next'
import { Poppins, Noto_Sans, Montserrat } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/components/providers/theme-provider';

import Layout from './_components/layout/layout';
import ConvexClientProvider from '@/components/providers/convex-provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-poppins',
});

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Thullo',
  description: 'Manage any type of project, workflow, or task tracking',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/Logo-small-dark.svg",
        href: "/Logo-small-dark.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/Logo-small.svg",
        href: "/Logo-small.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`
      ${poppins.variable} 
      ${noto_sans.variable} 
      ${montserrat.variable}
      `}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Layout>
              {children}
            </Layout>
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
