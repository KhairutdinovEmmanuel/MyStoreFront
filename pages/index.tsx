import Head from 'next/head';
import HomePage from "../components/containers/HomePage";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}

export default Home;