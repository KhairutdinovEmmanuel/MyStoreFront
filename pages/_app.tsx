import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = (props) => {

  const { Component, pageProps } = props;

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
