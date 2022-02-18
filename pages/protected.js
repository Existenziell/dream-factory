import Head from "next/head"
import { useRouter } from "next/router"
import Login from "components/Login"
import { projects } from "lib/projects"

export default function Protected({ hasReadPermission }) {

  const router = useRouter()

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />
  }

  return (
    <div>
      <Head>
        <title>DreamFactory Roadmap</title>
      </Head>

      <main className="px-4 md:px-8 pb-16">

        <h1 className="mt-8 mb-1 text-4xl">Dream Factory Cozumel</h1>
        <h2 className="mb-12 italic">Projects Roadmap</h2>
        <ul className="flex flex-col items-center justify-center gap-8">
          {projects.map(p => {
            return (
              <li key={p.title} className='w-full p-4 bg-gray-100 rounded shadow overflow-hidden'>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:space-x-8">
                  <div>
                    <h3 className="text-4xl mb-2 w-max">{p.title}</h3>
                    <p className="my-4 p-3 bg-white text-gray-600">{p.desc}</p>
                    <p>
                      <span className="w-24 inline-block">URLs:</span>
                      {p.urls.map(u => (<a href={u} target='_blank' rel="noreferrer" className="inline-block mr-4">{u}</a>))}
                    </p>
                    <p>
                      <span className="w-24 inline-block">Github:</span>
                      <a href={p.github} target='_blank'>{p.github}</a>
                    </p>
                    {p.references &&
                      <p>
                        <span className="w-24 inline-block">References:</span>
                        {p.references.map(r => (<a href={r} target='_blank' className="inline-block mr-4">{r}</a>))}
                      </p>
                    }
                    {p.contacts.length > 0 &&
                      <p>
                        <span className="w-24 inline-block">Contacts:</span>
                        <span>{p.contacts}</span>
                      </p>
                    }
                  </div>
                  <img src={`/${p.image}`} className='max-h-40 mt-8 md:mt-0' />
                </div>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}
