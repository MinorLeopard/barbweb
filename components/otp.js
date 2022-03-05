import firebase from "../firebase";
import React, {useState} from 'react';
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import {onAuthStateChanged } from "firebase/auth";
import Swal from 'sweetalert2';
import Head from 'next/head';
import {useRouter} from 'next/router';
import { Buffer } from 'buffer';
const Auth = () => {
  const Router = useRouter();
    const form = {
       'marginTop':'100px'
    }
    const style = {
        'boxSizing': 'border-box',
        'border': '2px solid #ccc',
        'borderRadius':'4px',
        'fontSize': '16px',
        'backgroundColor': 'white',
        'backgroundImage': 'url("https://www.linkpicture.com/q/Phone_2.png")',
        'backgroundPosition': '10px 15px',
        'backgroundRepeat': 'no-repeat',
        'padding': '12px 20px 12px 40px'
      }
      const pin = {
        'boxSizing': 'border-box',
        'border': '2px solid #ccc',
        'borderRadius':'4px',
        'fontSize': '16px',
        'backgroundColor': 'white',
        'backgroundImage': 'url("https://www.linkpicture.com/q/Pin-Pad.png")',
        'backgroundPosition': '10px 15px',
        'backgroundRepeat': 'no-repeat',
        'padding': '12px 20px 12px 40px'
      }
      const submit = {
        'backgroundColor': '#04AA6D',
        'border': 'none',
        'color': 'white',
        'padding': '13px 32px',
        'textDecoration': 'none',
        'margin': '4px 2px',
        'cursor': 'pointer',
        'borderRadius':'5px'
      }
      const [register,setregister] = useState({
        mobile:"",
        otp:""
    });
    const handleChange = (e) =>{
        const {name,value} = e.target;
        console.log(name,value);
        setregister({
            ...register,
            [name]:value
        })
      }
      const configureCaptcha = () => {
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              Swal.fire(
                'reCAPTCHA completed',
                'reCAPTCHA verification completed',
                'success'
              )
            },
            'expired-callback': () => {
              // Response expired. Ask user to solve reCAPTCHA again.
              Swal.fire(
                'reCAPTCHA timeout',
                'reCAPTCHA not completed try again',
                'info'
              )
            }
          }, auth);
      }
      const onSignInSubmit = (e) =>{
        e.preventDefault();
        configureCaptcha();
        const phoneNumber = "+91"+register.mobile;
        const appVerifier = window.recaptchaVerifier;
        const auth = getAuth();
        signInWithPhoneNumber(auth,phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              console.log("otp has been sent");
              Swal.fire(
                'OTP sent',
                'OTP is been sent',
                'success'
              );
            }).catch((error) => {
              // Error; SMS not sent
              console.log(error);
              Swal.fire(
                'OTP NOT SENT',
                `Error OTP not sent try again`,
                'info'
              );
            });
        
      }
      const onSubmitOTP = (e) =>{
        e.preventDefault();
        const code = register.otp;
        window.confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user));
          Swal.fire(
            'Verified USER',
            'Verification completed',
            'success'
          )
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.log(error);
          Swal.fire(
            'Couldn\'/t sign in',
            'Wrong OTP try again',
            'error'
          )
        });
      }
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          const phnbr = user.phoneNumber;
          const encode = Buffer.from(phnbr).toString('base64');
          console.log(uid);
          Router.push(`/profilebarb?user=${encode}`);
        } else {
          // User is signed out
          // ...
          console.log("logout");
        }
      });
    return(
        <>
        <Head>
          
        </Head>
      <div id="recaptcha-container"></div>
            <center><div style={form}>
            <div id="recaptcha-container"></div>
             <input type="number"  defaultValue={register.mobile} name="mobile" placeholder="Enter Phone Number.." style={style} onChange={handleChange}/>
             <button onClick={onSignInSubmit} style={submit}>Send OTP</button>
            </div></center>
            <br/>
            <br/>
            <center><div>
             <input type="number" name="otp" defaultValue={register.otp} placeholder="Enter OTP.." style={pin} onChange={handleChange}/>
             <button onClick={onSubmitOTP} style={submit}>Verify</button>
            </div></center>
        </>
    );
}
export default Auth;