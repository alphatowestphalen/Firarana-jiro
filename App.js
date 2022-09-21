import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
// import Footer from './assets/footer/component/Footer';
// import SousCompteur from './assets/SousCompteurs/Component/SousCompteur';
// import Lottier from 'lottie-react-native';
// import HomePage from './assets/homePage/component/homePage';
import LoginPage from './assets/loginPage/component/loginPage';
// import Compteur from './assets/Compteure/Compteur';

const imageLogin = require("./assets/loginPage/img/login.json");
// const image = require("./assets/homePage/img/lamp1.jpg");
// const imageSousCompteur = require("./assets/SousCompteurs/img/olona.jpg")
export default function App() {
  return (
      // <SousCompteur images={imageSousCompteur}/>
    // <HomePage images={image}/>
    <LoginPage images={imageLogin}/>
    // <Compteur />
  );
}
