import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dream Factory Cozumel | Roadmap</title>
      </Head>

      <main className="bg-gray-500 text-2xl">
        <Link href='/login'><a>Login</a></Link>
      </main>
    </div>
  );
}
