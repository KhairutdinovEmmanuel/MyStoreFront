import Head from 'next/head';
import HomePage from "../components/containers/HomePage";
import MainLayout from '../components/layouts/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </MainLayout>
  )
}

export default Home;