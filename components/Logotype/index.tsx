import Image from "next/image";
// Styles
import useStyles from './styles';

const Logotype: React.FC = () => {

  const classes = useStyles();

  return (
    <Image
      width={48}
      height={48}
      src={"/MyStore.png"}
      alt="Picture logotype"
      className={classes.pictureLogotype}
    />
  )
}

export default Logotype;