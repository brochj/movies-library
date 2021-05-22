import Head from 'next/head'
import { BLOG_NAME, HOME_OG_IMAGE_URL, DESCRIPTION, HOME_URL } from '../lib/constants'
import { GA_TRACKING_ID } from '../lib/gtag'

export default function Meta() {
  return (
    <Head>
      {/* Google Adsense */}
      <script data-ad-client="ca-pub-9080032444400275" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      {/*  Google Tag Manager */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}/>
      <script
        // dangerouslySetInnerHTML={{
        //   __html: `
        //         window.dataLayer = window.dataLayer || [];
        //         function gtag(){dataLayer.push(arguments);}
        //         gtag('js', new Date());
        //         gtag('config', '${GA_TRACKING_ID}');
        //     `,
        // }}
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GA_TRACKING_ID}');
            `,
        }}
      />
      {/* End Google Tag Manager */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favico6pple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <meta name="title" content={BLOG_NAME} key="title" />
      <meta name="description" content={`${BLOG_NAME} | ${DESCRIPTION}`} key="description" />

      {/* OPEN GRAPH DATA */}
      <meta property="og:title" content={BLOG_NAME} key="og:title"/>
      <meta property="og:description" content={DESCRIPTION} key="og:description"/>
      <meta property="og:type" content="website" key="og:type"/>
      <meta property="og:image" content={HOME_OG_IMAGE_URL} key="og:image" />
      <meta property="og:url" content={HOME_URL} key="og:url" />
      <meta property="og:locale" content="pt_BR" />
    </Head>
  )
}
