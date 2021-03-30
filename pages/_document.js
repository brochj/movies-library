import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br" className="dark">
        <Head />
        <body className="bg-background dark:bg-dark-background">
          {/* <!-- Google Tag Manager (noscript) --> */}
          {/* <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
          className="h-0 w-0 hidden invisible"></iframe></noscript> */}
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
