import Cookies from 'universal-cookie'
import consts from '../consts'

const Logout = () => {
  return (
    <button
      className='mt-16 bg-brand text-white border border-brand px-4 py-2 font-bold rounded hover:shadow hover:bg-white hover:text-brand transition-all'
      onClick={(e) => {
        e.preventDefault()
        const cookies = new Cookies()
        cookies.remove(consts.SiteReadCookie, { path: '/' })
        window.location.href = '/login'
      }}
    >
      Logout
    </button>
  )
}

export default Logout
