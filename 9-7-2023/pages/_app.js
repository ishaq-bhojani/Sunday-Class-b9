import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>My NextJS Page Content</title>
        <meta name="description" content="This is a dummy page" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
