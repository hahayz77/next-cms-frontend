import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { StateContext } from '@/context/StateContext';
import { ApiFetchContext } from '@/context/ApiFetchContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
    <ApiFetchContext>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </ApiFetchContext>
    </StateContext>
  )
}
