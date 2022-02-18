import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Head from 'next/head'
import Cookies from "universal-cookie"
import consts from "consts"
import App from "next/app"

function DreamFactory({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

DreamFactory.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  // let appProps
  const cookies = new Cookies(appContext.ctx.req.headers.cookie)
  const password = cookies.get(consts.SiteReadCookie) ?? ""

  if (password === "letmein") {
    appProps.pageProps.hasReadPermission = true
  }

  return { ...appProps }
}

export default DreamFactory;
