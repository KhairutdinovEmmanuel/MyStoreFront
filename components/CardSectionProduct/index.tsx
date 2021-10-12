import { ImageProps } from "next/image";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CustomCartMedia from "../CustomCardMedia";

export interface ICardSectionProductProps {
  className?: string;
  title: ((string | React.ReactElement<any, any>) & string) & React.ReactNode & string;
  imageProps: ImageProps;
  titleTypographyProps?: object,
}

const CardSectionProduct: React.FC<ICardSectionProductProps> = (props) => {
  
  const {
    title,
    className,
    titleTypographyProps,
    imageProps,
  } = props; 

  return (
    <Card 
      className={className} 
    >
      <CardHeader 
        title={title} 
        titleTypographyProps={titleTypographyProps}
      />
      <CustomCartMedia {...imageProps} />
    </Card>
  )
}

export default CardSectionProduct;