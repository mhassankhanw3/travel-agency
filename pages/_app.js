import { MainContextProvider } from "../context/Main";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <Component {...pageProps} />
    </MainContextProvider>
  );
}

export default MyApp;
