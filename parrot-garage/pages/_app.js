import React from 'react'
import '../styles/global.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
