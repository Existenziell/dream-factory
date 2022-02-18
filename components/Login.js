import { useState } from "react"
import Cookies from "universal-cookie"
import consts from "consts"

const Login = ({ redirectPath }) => {
  const [password, setPassword] = useState("")

  return (
    <>
      <h1 className="text-2xl mb-4 text-center mt-8">Please login to proceed</h1>

      <div className="w-full md:w-1/3 max-w-sm mx-auto mt-8 px-8">
        <form>
          <label className="block">
            <span className="text-gray-700">Password</span>
            <input
              type="text"
              className="form-input mt-1 block w-full bg-gray-50"
              placeholder="Take a wild guess..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <button
            type="submit"
            className="mt-3 bg-brand text-white border border-brand px-4 py-2 font-bold rounded hover:shadow hover:bg-white hover:text-brand transition-all"
            onClick={(e) => {
              e.preventDefault()
              const cookies = new Cookies()
              cookies.set(consts.SiteReadCookie, password, {
                path: "/",
              })
              window.location.href = redirectPath ?? "/"
            }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
