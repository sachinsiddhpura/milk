
import React, { Component } from 'react';
import { Box,Text} from 'react-native-design-utility';
import { Alert } from 'react-native';
import { TouchableOpacity, Image } from 'react-native';
import { images } from '../constants/images';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
//import { FontAwesome } from '@expo/vector-icons'


const bgColor = type =>{
  switch (type) {
    case 'google':
      return 'dodgerblue';
    case 'facebook':
      return 'darkblue';
    default:
      return 'white';
  }
}

const LoginButton = ({onPress}) =>(
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.googleButton}
          name="Facebook"
          underlayColor={styles.googleButton.backgroundColor}
          onPress={onPress}
        >
          <Text style={styles.googleButtonText}>Log in with Google</Text>
        </TouchableHighlight>
      </View>
);
      
const styles = StyleSheet.create({
  container: {
    flex:0.3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  googleButton: {
    width: 450 * 0.75,
    height: 46,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CF2D36'
  },
  googleButtonText: {
    color: '#fff'
  },
  space: {
    height: 17
  }
});

export default LoginButton;

// const LoginButton = ({children,type,onPress}) =>(
//   <TouchableOpacity onPress={onPress}>
//   <Box dir='row' align='center' shadow='100%' bg='green' w='80%' self='center' p='xs' radius='xs' mb='sm' bg={bgColor(type)}>
//     <Box mr='sm'>
//       <Box bg='white' h={32} w={32} radius='xs' center>
//           {type === 'google' && <Image source={images.googleColorIcon}/>}
//           {type === 'facebook' && <Text color='blue'>F</Text>}
//       </Box>
//     </Box>
//     <Box>
//       <Text size='md' color='white'>{children}</Text>
//     </Box>
//   </Box>
// </TouchableOpacity>
// );
