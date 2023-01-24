import Hero from '../components/Hero'
import { StateContext } from '@/context/StateContext'

export default function Layout({ children }) {
    return (
      <>
      <StateContext>
        <Hero />
      </StateContext>
      </>
    )
  }