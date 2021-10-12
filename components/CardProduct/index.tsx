import { ImageProps } from "next/image";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import WrapperImage, { IWrapperImageProps } from "../WrapperImage";

export interface ICardProductProps {
  title: string;
  className?: string;
  imageProps: IWrapperImageProps & ImageProps;
  titleTypographyProps: object;
  price: string;
  description: string;
}

const CardProduct: React.FC<ICardProductProps> = (props) => {
  
  const {
    className,
    title,
    imageProps,
    titleTypographyProps,
    price,
    description,
  } = props;
  
  return (
    <Card className={className} >
      <CardMedia>
        <WrapperImage {...imageProps} />
      </CardMedia>
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