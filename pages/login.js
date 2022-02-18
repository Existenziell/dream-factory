import Head from "next/head"
import Cookies from "universal-cookie"
import Login from "components/Login"
import consts from "consts"

export default function LoginPage({ hasReadPermission }) {
  if (hasReadPermission) {
    return (
      <>
        <Head>
          <title>Logout</title>
        </Head>
        <div className="w-full text-center">
          <button
            className="mt-16 bg-brand text-white border border-brand px-4 py-2 font-bold rounded hover:shadow hover:bg-white hover:text-brand transition-all"
            onClick={(e) => {
              e.preventDefault()
              const cookies = new Cookies()
              cookies.remove(consts.SiteReadCookie, { path: "/" })
              window.location.href = "/login"
            }}
          >
            Logout
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Login redirectPath="/" />
    </>
  )
}
