import {initializeApp} from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBUKagWaLpNR35Y0sm4zWrS_QKA2jhoeP4",
    authDomain: "webpushtest-a894a.firebaseapp.com",
    projectId: "webpushtest-a894a",
    storageBucket: "webpushtest-a894a.appspot.com",
    messagingSenderId: "288596309820",
    appId: "1:288596309820:web:ddd2158900ef830c1b5039"
  };

// Initilaize App

// BPfrQTE3QSiMDPFrqbkPilBIMVTk376OGj7KbFKbOsaFSttF0zZt0Apm2Viob8I1huXkXtpDy1Bv75dHO7bxQ8A 
// BPfrQTE3QSiMDPFrqbkPilBIMVTk376OGj7KbFKbOsaFSttF0zZt0Apm2Viob8I1huXkXtpDy1Bv75dHO7bxQ8A

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    console.log(permission)

    if(permission === 'granted'){
        const token = await getToken(messaging, {
            vapidKey: 'BPfrQTE3QSiMDPFrqbkPilBIMVTk376OGj7KbFKbOsaFSttF0zZt0Apm2Viob8I1huXkXtpDy1Bv75dHO7bxQ8A'
        })
        console.log(token);
    }
}
