// Core 
import Link from 'next/link';
// Components
import CardSectionProducts from "../../CardSectionProduct";
import ListItems from '../../ListItems';
// Styles
import useStyles from './styles';
// Types
import { ICatalogPageProps } from "./interfaces";

const CatalogPage: React.FC<ICatalogPageProps> = (props) => {
  
  const {
    sectionProducts,
  } = props;

  const classes = useStyles();

  return (
    <>
      <ListItems
        className={classes.containerCardSectionProduct}
        items={sectionProducts}
        renderItem={(item) => (
          <div
            key={item.id}
            className={classes.cardSectionProduct}
          >
            <Link href={`catalog/${item.title}`}>
              <a>
                <CardSectionProducts
                  title={item.title}
                  titleTypographyProps={{
                    align: 'center',
                  }}
                  imageProps={{
                    width: 952,
                    height: 510,
                    src: item.imageUrl
                  }}
                />
              </a>
            </Link>
          </div>
        )}
      />
    </>
  )
}

export default CatalogPage;
