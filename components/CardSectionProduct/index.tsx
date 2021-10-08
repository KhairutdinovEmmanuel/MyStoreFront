import { ImageProps } from "next/image";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import WrapperImage from "../WrapperImage";

export interface ICardSectionProductProps {
  title: ((string | React.ReactElement<any, any>) & string) & React.ReactNode & string;
  className?: string;
  picture: string;
  titleTypographyProps?: object,
}

const CardSectionProduct: React.FC<ICardSectionProductProps & ImageProps> = (props) => {
  
  const {
    title,
    children,
    className,
    titleTypographyProps,
    ...imageProps
  } = props; 

  return (
    <Card 
      className={className} 
    >
      <CardHeader 
        title={title} 
        titleTypographyProps={titleTypographyProps}
      />
      <CardMedia 
        component={WrapperImage} 
        {...imageProps}
      />
    </Card>
  )
}

export default CardSectionProduct;