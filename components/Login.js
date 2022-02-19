import { useState } from 'react'
import Cookies from 'universal-cookie'
import consts from '../consts'

const Login = ({ redirectPath }) => {
  const [password, setPassword] = useState('')

  return (
    <div className='w-full px-4'>
      <h1 className='text-2xl text-center mt-8'>Please login to proceed</h1>
      <form className='flex flex-col mt-8 items-center'>
        <input
          type='password'
          className='input mt-3 text-center'
          placeholder='Take a wild guess...'
          value={password}
          onChange={(e) => setPassword(e.target.value)}>
        </input>
        <button
          type='submit'
          className='button mt-3'
          onClick={(e) => {
            e.preventDefault()
            const cookies = new Cookies()
            cookies.set(consts.SiteReadCookie, password, {
              path: '/',
            })
            window.location.href = redirectPath ?? '/'
          }}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
