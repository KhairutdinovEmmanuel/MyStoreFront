// Core
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
// Layouts
import MainLayout from "../../components/layouts/MainLayout";
// Components
import SelectedCatalogPage from '../../components/containers/SelectedCatalogPage';

const SelectedCatalog: React.FC = () => {

  const router = useRouter();

  const selectedCatalog = useMemo(() => { 
    const selectedCatalog = router.query.selectedCatalog
    if(typeof selectedCatalog === 'string') {
      return selectedCatalog;
    }
    return "";
  }, [router.query.selectedCatalog]);

  return (
    <MainLayout>
      <Head>
        <title>Catalog {selectedCatalog}</title>
      </Head>
      <SelectedCatalogPage 
        selectedCatalog={selectedCatalog}
      />
    </MainLayout>
  )
}

export default SelectedCatalog;