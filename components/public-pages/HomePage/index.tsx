// Core
import { useMemo } from 'react';
// Components
import { Carousel } from 'react-responsive-carousel';
import FilterProduct from '../../FilterProduct';
import ListItems from '../../ListItems';
// Styles
import useStyles from './styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Types
import { IHomePageProps } from './intefaces';
import { IProduct } from '../../../mock/interfaces/products.interfaces';
import CardProduct from '../../CardProduct';

const HomePage: React.FC<IHomePageProps> = (props) => {

  const { 
    products,
    sliderList, 
    initialFilter,
    filterSelectsOptions,
    onFilter,
  } = props; 

  const classes = useStyles();

  return (
    <>
      <div className={classes.containerSlider} >
       <div className={classes.sliderList} >
        <Carousel
          interval={5000}
          transitionTime={500}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay
        >
          {sliderList.map((item) => (
            <div key={item.slide} className={classes.slideItem}>
              <img 
                className={classes.slideItemImage}
                src={item.imageUrl} 
              />
            </div>
          ))}
        </Carousel>
       </div>
      </div>
      <div className={classes.containerFilterProduct} >
        <FilterProduct 
          initialFilter={initialFilter}
          selectsOptions={filterSelectsOptions}
          onFilter={onFilter}
        />
      </div>
      <ListItems
        className={classes.containerCardProduct}
        items={products}
        renderItem={(item: IProduct) => (
          <div 
            key={item.id} 
            className={classes.cardProduct}
          >
            <CardProduct 
              title={item.title}
              price={item.price}
              description={item.description}
              imageProps={{
                width: 570,
                height: 300,
                src: item.imageUrl,
                alt: `Picture ${item.title}`,
              }}
              titleTypographyProps={{
                align: 'center',
              }}
            />
          </div>
        )}
      />
    </>
  )
}

export default HomePage;