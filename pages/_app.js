import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Cookies from 'universal-cookie'
import App from 'next/app'
import consts from '../consts'

function DreamFactory({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

DreamFactory.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const cookies = new Cookies(appContext.ctx.req.headers.cookie)
  const password = cookies.get(consts.SiteReadCookie) ?? ''

  if (password === 'St4rk1ndustr13s') {
    appProps.pageProps.hasReadPermission = true
  }

  return { ...appProps }
}

export default DreamFactory
