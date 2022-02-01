import 'tailwindcss/tailwind.css'
import Navigation from '../components/Navbar'
import '../styles/style.css'
import { useEffect,useState } from 'react'
import Loader from '../components/loader'
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
      
  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {

      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };
      
    loadData();
  }, [])
  if (loading) {
    return <div><Loader/></div>
}
 else{ return <>
  <Navigation/>
  <Component {...pageProps} />
  </>}
}

export default MyApp
