import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { useRouter } from 'next/router';


export default function Layout() {
  const loading = undefined;
  const user = undefined;
  const router = useRouter();
    // useEffect(() => {
    //   if (!(user || loading)) {
    //     router.push('/login');
    //   }
    // }, [user, loading]);

    return (
      <>
        <Hero />
      </>
    )
  }