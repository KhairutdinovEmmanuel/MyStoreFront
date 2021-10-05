// Components
import SelectedCatalogPage from "../public-pages/SelectedCatalogPage";
import { ISelectedCatalogPageContainerProps } from "../public-pages/SelectedCatalogPage/interfaces";

const SelectedCatalogPageContainer: React.FC<ISelectedCatalogPageContainerProps> = (props) => {
  return (
    <SelectedCatalogPage selectedCatalog={props.selectedCatalog} />
  )
} 

export default SelectedCatalogPageContainer;