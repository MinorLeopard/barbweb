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
  <Head>
        <link rel="shortcut icon" type='image/png' href="https://www.linkpicture.com/q/favicon_27.png" />
        <meta httpEquiv="content-language" content="en"></meta>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="BARB, BARB SALON SERVICES, BARB APP, BEAUTY,BARB SALON MANAGER"></meta>
        <meta name="author" content="BARB"></meta>
        <meta name="publisher" content="BARB"></meta>
        <meta name="copyright" content="BARB"></meta>
        <meta name="description" content="Barb is salon booking app.Install BARB SALON MANAGER to register your beauty salon"></meta>
        <meta name="page-topic" content="Media"></meta>
        <meta name="page-type" content="Beauty"></meta>
        <meta name="audience" content="Everyone"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta name="title" content="BARB SALON SERVICES"/>
        <meta name="description" content="BARB is a salon booking and appointment app to book salon nearest to you"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.barb.co.in/"/>
        <meta property="og:title" content="BARB SALON SERVICES"/>
        <meta property="og:description" content="BARB is a salon booking and appointment app to book salon nearest to you"/>
        <meta property="og:image" content="https://www.linkpicture.com/q/BARB_1.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.barb.co.in/"/>
        <meta property="twitter:title" content="BARB SALON SERVICES"/>
        <meta property="twitter:description" content="BARB is a salon booking and appointment app to book salon nearest to you"/>
        <meta property="twitter:image" content="https://www.linkpicture.com/q/BARB_1.png"/>
        <meta name="theme-color" content="lightgreen"/>
        <meta name="msapplication-TileColor" content="lightgreen"/>
        <meta name="msapplication-navbutton-color" content="lightgreen"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="lightgreen"/>
  </Head>
  <Navigation/>
  <Component {...pageProps} />
  <Fab id="play" className="float-right position-absolute bottom-6 right-5">
  			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Ra1ERY1cczg" onClose={() => setOpen(false)} />
        <PlayCircleFilledWhiteIcon htmlColor='red' onClick={()=> setOpen(true)}/>
			</Fab>
      </>
  </Online>
  </>}
}

export default MyApp
