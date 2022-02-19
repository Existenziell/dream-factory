import Head from 'next/head'
import Login from '../components/Login'
import Logout from '../components/Logout'

export default function LoginPage({ hasReadPermission }) {
  if (hasReadPermission) {
    return (
      <>
        <Head>
          <title>Logout</title>
        </Head>
        <div className='flex justify-center mt-24'>
          <Logout />
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Login redirectPath='/' />
    </>
  )
}
