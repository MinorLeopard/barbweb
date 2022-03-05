import {useRouter} from 'next/router';
import { Buffer } from 'buffer';
const Profile = () => {
    const {asPath} = useRouter();
    const Router = useRouter();
    const {query} = useRouter();
    if(asPath == "/profilebarb"){
        Router.push('/Auth');
    }
    else{
    const id = query.user;
    const decode =  Buffer.from(id, 'base64').toString('ascii');
    console.log(decode);
    }
   return(
       <>
        <h1>Barb Profile {decode}</h1>
       </>
   )
}
export default Profile