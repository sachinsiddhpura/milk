
import React from 'react';
import { Box} from 'react-native-design-utility';
import { TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Left, ListItem } from 'native-base';
import { images } from '../constants/images';
import { theme } from '../constants/theme';

 

const LoginButton2 = ({ children, type, onPress }) => (
      <Container>
      <Content>
      <TouchableOpacity onPress={onPress}>
          <Card>
            <CardItem>
                    <Icon active name="logo-facebook" style={{fontSize: 20, color:'blue'}}/>
                        <Text>Continue With Facebook</Text>
              </CardItem>  
            </Card>
        </TouchableOpacity>
      </Content>
    </Container>
);


export default LoginButton2;