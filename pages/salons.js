// import Head from 'next/head';
// import { Fade } from "react-awesome-reveal";
// import Footer from '../components/Footer';
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Chip from '@mui/material/Chip';
// import Link from '@mui/material/Link';
// import Alert from '@mui/material/Alert';

// const Salons = ({Details}) => {
//     console.log(Details);
//     return(
//         <>
//             <Head>
//             <title>Our Partner Salon</title>
//             <link rel="shortcut icon" type='image/png' href="https://www.linkpicture.com/q/favicon_27.png" />
//         <meta httpEquiv="content-language" content="en"></meta>
//         <meta charSet="UTF-8"></meta>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
//         <meta name="keywords" content="BARB, BARB SALON SERVICES, BARB APP, BEAUTY,BARB SALON MANAGER"></meta>
//         <meta name="author" content="BARB"></meta>
//         <meta name="publisher" content="BARB"></meta>
//         <meta name="copyright" content="BARB"></meta>
//         <meta name="description" content="Barb is salon booking app.Install BARB SALON MANAGER to register your beauty salon"></meta>
//         <meta name="page-topic" content="Media"></meta>
//         <meta name="page-type" content="Beauty"></meta>
//         <meta name="audience" content="Everyone"></meta>
//         <meta name="robots" content="index, follow"></meta>
//         <meta name="title" content="BARB SALON SERVICES"/>
//         <meta name="description" content="BARB is a salon booking and appointment app to book salon nearest to you"/>
//         <meta property="og:type" content="website"/>
//         <meta property="og:url" content="https://www.barb.co.in/"/>
//         <meta property="og:title" content="BARB SALON SERVICES"/>
//         <meta property="og:description" content="BARB is a salon booking and appointment app to book salon nearest to you"/>
//         <meta property="og:image" content="https://www.linkpicture.com/q/BARB_1.png"/>
//         <meta property="twitter:card" content="summary_large_image"/>
//         <meta property="twitter:url" content="https://www.barb.co.in/"/>
//         <meta property="twitter:title" content="BARB SALON SERVICES"/>
//         <meta property="twitter:description" content="BARB is a salon booking and appointment app to book salon nearest to you"/>
//         <meta property="twitter:image" content="https://www.linkpicture.com/q/BARB_1.png"/>
//         <meta name="theme-color" content="lightgreen"/>
//         <meta name="msapplication-TileColor" content="lightgreen"/>
//         <meta name="msapplication-navbutton-color" content="lightgreen"/>
//         <meta name="apple-mobile-web-app-status-bar-style" content="lightgreen"/>
//             </Head>
//         <div id="main" className="grid grid-cols-1 gap-4 justify-evenly m-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> 
//         {Details.map((data,index) => {
//             return(
//                 <Cards 
//                 key={index}
//                 name={Details[index].barbershipname}
//                 loc={Details[index].barbershiproadAddress}
//                 time={Details[index].OpeningTime}
//                 close={Details[index].ClosingTime}
//                 state={Details[index].barbershipstateAddress}
//                 />
//             )
//         })}
//         </div>
//         <Footer/>
//         </>
//     )
//     function Cards({name,loc,time,close,state}){
//         console.log(name,loc);
//       return(
//           <>
//           <Fade>
//         <Card sx={{ maxWidth: 350 }}>
//       <CardMedia
//         component="img"
//         alt="salon img"
//         height="140"
//         image="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Fsb24lMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//       />
//       <Chip size="small" id="state" label={state} color="error" />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//         {loc}
//         <br></br>
//         <br></br>
//         <Chip size="small"  label={`AC/NON AC`} color="primary" /> {" "}
//         <Chip size="small"  label={`${time} - ${close}`} color="success" />
//         <br></br>
//         <br></br>
//         <Alert variant="outlined" severity="success">
//         Online payment accepted
//       </Alert>
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small"><Link target="_blank" href="https://play.google.com/store/apps/details?id=com.basic.thebarbershop" underline="hover">Book</Link></Button>
//       </CardActions>
//     </Card>
//     </Fade>
//           </>
//       )
//     }

// }

// export async function getStaticProps() {
//     const response = await fetch("https://lethalslayer2.000webhostapp.com/websitedatasalon.php",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
  
//       console.log("data fetched");
//       const data = await response.json();
//       return {
//         props: {
//           Details: data,
//         },
//         revalidate: 15,
//       };
//   }
// export default Salons;
