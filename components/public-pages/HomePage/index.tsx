// Core
import { useMemo } from 'react';
// Components
import { Carousel } from 'react-responsive-carousel';
// Styles
import useStyles from './styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Types
import { IHomePageProps } from './intefaces';

const HomePage: React.FC<IHomePageProps> = (props) => {

  const { 
    sliderList
  } = props; 

  const classes = useStyles();

  const renderSlide = useMemo(() => {
    return sliderList.map((item) => (
      <div key={item.slide} className={classes.slideItem}>
        <img 
          className={classes.slideItemImage}
          src={item.imageUrl} 
        />
      </div>
    ));
  }, [sliderList])  

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
          {renderSlide}
        </Carousel>
       </div>
      </div>
    </>
  )
}

export default HomePage;