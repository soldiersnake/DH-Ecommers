import styles from './Hero.module.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { GoogleCredentialResponse } from '../../../interface';

export const Hero = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroTitleContainer}>
            <h1>Super Flash Sale <span>50% off</span></h1>
        </div>
        <GoogleLogin
          onSuccess={credentialResponse => {
            const credentialResponseDecoded = jwtDecode((credentialResponse as GoogleCredentialResponse).credential);
            console.log('credentialResponseDecoded :', credentialResponseDecoded);
            
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
    </div>
  )
}
