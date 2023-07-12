import type { AppProps } from 'next/app'
import './globals.css'
import { MantineProvider } from '@mantine/core';
import { Provider } from 'mobx-react'
export default function App({ Component, pageProps }: AppProps) {
  return (
 
        <Component {...pageProps} />
 
  )
}