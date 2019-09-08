
import React, { Component } from 'react';
import { StyleSheet,Box} from 'react-native-design-utility';
import OnboardingLogo from '../commons/OnboardingLogo';
import LoginButton from '../commons/LoginButton'
import { Alert } from 'react-native';
import { TouchableOpacity, Image ,Animated} from 'react-native';
import FacebookCo from './Facebook'
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Font } from "expo";
// import { AppLoading } from 'expo';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';


const scopes = ['profile', 'email'];

// const googlecall=async function signInWithGoogleAsync() {
//   try {
//     const result = await Expo.Google.logInAsync({
//       androidClientId: '508783783220-t1bsij3d7pl8udkce41dl43q2cfof4e2.apps.googleusercontent.com',
//      // iosClientId: YOUR_CLIENT_ID_HERE,
//       scopes: ['profile', 'email'],
//     });
//       console.log(result)
//     if (result.type === 'success') {
//       return result.accessToken;
//     } else {
//       return { cancelled: true };
//     }
//   } catch (e) {
//     return { error: true };
//   }
// }

const loginAsync =  async () => {
  try {
    const result = await Google.logInAsync({
      webClientId:"508783783220-cbb5gua0u5jh46a3seqelr9a3t6jdfs0.apps.googleusercontent.com",
      androidClientId: "508783783220-t1bsij3d7pl8udkce41dl43q2cfof4e2.apps.googleusercontent.com",
      iosClientId: "245652154526-oou2jue8h33tm1k637uggto26oajhqb9.apps.googleusercontent.com",
      scopes,
    });
    console.log(result)
    if (result.type === 'success') {
      return (result.accessToken);
    }

    return('No success');
  } catch (error) {
    console.log(error)
    return (error);
  }
};
const BoxAnimated = Animated.createAnimatedComponent(Box);

class LoginScreen extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0),
    isReady: false,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = { loading: true };
  // }


  componentDidMount (){
    Animated.parallel([this.positionAnim(), this.opacityAnim()]).start();
  }


  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
     
    });
    }

  opacityAnim = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      delay: 100,
    }).start();
  };

  positionAnim = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // onGooglePress = () =>{
  //   try {
  //     const token = await GoogleApi.loginAsync();

  //     await this.props.authStore.login(token, 'GOOGLE');
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // }

  onFacebookPress = () =>{
    Alert.alert('Facebook Press')
  }

  render(){
    const {opacity} = this.state;


    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0],
    });

    return(

      <Box f={1} center bg="white">
        <BoxAnimated f={1} style={{transform: [
              {
                translateY: logoTranslate,
              },
            ],}}>
          <Box f={1} center>
          <OnboardingLogo />
          </Box>
        </BoxAnimated>
        <BoxAnimated f={0.9} w='100%' style ={{opacity}}>
            <LoginButton onPress={loginAsync} type='google'>Countinue With Google</LoginButton>
            <FacebookCo />
    <Container>
      <Content>
        <Button light><Text> Light </Text></Button>
        <Button primary><Text> Primary </Text></Button>
      </Content>
    </Container>
            
        </BoxAnimated>
      </Box>
    );
          
  }
}


export default LoginScreen;