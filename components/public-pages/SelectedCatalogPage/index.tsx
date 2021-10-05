// Types
import { ISelectedCatalogPageProps } from "./interfaces";

const SelectedCatalogPage: React.FC<ISelectedCatalogPageProps> = (props) => {
  
  const {
    selectedCatalog,
  } = props;
  
  return (
    <>
      Selected Catalog {selectedCatalog}
    </>
  )
};

export default SelectedCatalogPage; 