import { ImageProps } from "next/image";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CustomCartMedia from "../CustomCardMedia";

export interface ICardProductProps {
  title: string;
  className?: string;
  imageProps: ImageProps;
  titleTypographyProps: object;
  price: string;
  description: string;
}

const CardProduct: React.FC<ICardProductProps> = (props) => {
  
  const {
    className,
    imageProps,
    title,
    titleTypographyProps,
    price,
    description,
  } = props;
  
  return (
    <Card className={className} >
      <CustomCartMedia
        {...imageProps}
      />
      <CardHeader 
        title={title} 
        titleTypographyProps={titleTypographyProps}
      />
      <CardContent>
        <Typography>Price: {price}</Typography>
        <Typography>Description: {description}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardProduct;