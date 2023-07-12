import React from 'react';
import type { AppProps } from 'next/app'
import './globals.css'
// import { MantineProvider } from '@mantine/core';
import { Provider } from 'mobx-react'
 function App({ Component, pageProps }: AppProps) {
  return (
 
        <Component {...pageProps} />
 
  )
}
export default App
