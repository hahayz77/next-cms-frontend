import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { StateContext } from '@/context/StateContext';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </StateContext>
  )
}
