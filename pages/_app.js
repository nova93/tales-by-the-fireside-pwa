import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Some descriptions" />
        <meta name="keywords" content="Keywords" />
        <title>Tales by the Fireside</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-72x72.png"
          rel="icon"
          type="image/png"
          sizes="72x72"
        />
        <link
          href="/icons/icon-512x512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
