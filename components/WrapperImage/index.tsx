import Image, { ImageProps } from "next/image"

export interface IWrapperImageProps {
  picture?: string;
}

const WrapperImage: React.FC<ImageProps & IWrapperImageProps> = (props) => (
  <Image {...props} src={props.picture} />
)

export default WrapperImage