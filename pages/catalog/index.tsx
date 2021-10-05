import Head from 'next/head';
import CatalogPage from '../../components/containers/CatalogPage';
import MainLayout from "../../components/layouts/MainLayout";

const Catalog: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Catalog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CatalogPage />
    </MainLayout>
  )
}

export default Catalog;