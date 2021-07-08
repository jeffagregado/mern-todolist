import { AppProps } from 'next/app'
import Router from 'next/router'
import Layout from '../components/Layout'
import '../styles/globals.scss'

// fontAwesome
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '../src/fontAwesome' // fontAwesome libraries

// NProgress imports
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// NProgress configuration and Router events
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => {
  console.log('on start')
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  console.log('on compplete')
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  console.log('on error')
})

function MyApp({ Component, pageProps }: AppProps) {
  config.autoAddCss = false
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
