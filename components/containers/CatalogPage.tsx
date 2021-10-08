// Core
import { useEffect, useState } from "react";
// Components
import CatalogPage from "../public-pages/CatalogPage";
// Hooks
import useMockData from "../../hooks/useMockData";

const CatalogPageContainer: React.FC = () => {

  const [sectionProducts, setSectionProducts] = useState([]);

  const responseSectionProducts = useMockData("GET_SECTION_PRODUCTS", {});

  useEffect(() => {
    if(responseSectionProducts.loading) return;
    if(responseSectionProducts.data) {
      setSectionProducts(responseSectionProducts.data);
    }
  }, [responseSectionProducts])

  return (
    <CatalogPage
      sectionProducts={sectionProducts}
    />
  )
}

export default CatalogPageContainer;
