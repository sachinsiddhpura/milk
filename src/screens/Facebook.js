import React , {Component} from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as Facebook from 'expo-facebook';
import firebase from 'firebase';


const FACEBOOK_APP_ID = '698703190551843';


const config = {
  apiKey: "AIzaSyDpIvQrBxRaGGuA0KV6rBcVqtudbriiRbQ",
  authDomain: "milkwala-d01d1.firebaseapp.com",
  databaseURL: "https://milkwala-d01d1.firebaseio.com",
  projectId: "milkwala-d01d1",
  storageBucket: "",
  messagingSenderId: "508783783220",
  appId: "1:508783783220:web:015a5e104565e351"
};

firebase.initializeApp(config);

const auth = firebase.auth();

export default class FacebookCo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logInStatus: 'signed out',
      errorMessage: 'none'
    };
  }

  componentWillMount() {
    auth.onAuthStateChanged(user => {
      if (user != null) {
        this.setState({ logInStatus: 'We are authenticated now!' });
      } else {
        this.setState({ logInStatus: 'You are currently logged out.' });
      }
    });
  }

  async handleFacebookButton() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
      permissions: ['public_profile', 'email']
    });
    if (type === 'success') {
      
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      auth.signInAndRetrieveDataWithCredential(credential).catch(error => {
        this.setState({ errorMessage: error.message });
      });
    }
  }

  render() {
    return (
      
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.facebookButton}
          name="Facebook"
          underlayColor={styles.facebookButton.backgroundColor}
          onPress={() => this.handleFacebookButton()}
        >
          <Text style={styles.facebookButtonText}>Log in with Facebook</Text>
        </TouchableHighlight>
        {/* <View style={styles.space} />
        <Text>Logged In Status: {this.state.logInStatus}</Text>
        <View style={styles.space} />
        <Text> Log In Error Messages: {this.state.errorMessage}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:0.1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  facebookButton: {
    width: 450 * 0.75,
    height: 46,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B5998'
  },
  facebookButtonText: {
    color: '#fff'
  },
  space: {
    height: 17
  }
});
