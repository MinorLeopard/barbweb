import 'tailwindcss/tailwind.css'
import "@fontsource/ubuntu"
import Head from 'next/head';
import Navigation from '../components/Navbar'
import '../styles/style.scss'
import { useEffect,useState } from 'react'
import Loader from '../components/loader'
import { Offline, Online } from "react-detect-offline";
import ModalVideo from 'react-modal-video';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import Fab from '@mui/material/Fab';
import Img from 'next/image';
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [isOpen, setOpen] = useState(false);    
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
 <Offline><Loader/></Offline>
  <Online>
  <>
  <Navigation/>
  <Component {...pageProps} />
  <Fab id="play" className="position-absolute bottom-6 left-5">
  			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Ra1ERY1cczg" onClose={() => setOpen(false)} />
        <PlayCircleFilledWhiteIcon htmlColor='red' onClick={()=> setOpen(true)}/>
			</Fab>
      </>
  </Online>
  </>}
}

export default MyApp
