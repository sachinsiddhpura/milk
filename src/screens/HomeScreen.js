import React, { Component } from 'react';
import {Box,Text} from 'react-native-design-utility';

class HomeScreen extends Component{
    state = {};
    render(){
        return(
            <Box>
                <Text f={1} center bg='white'>
                    Home Screen
                </Text>
            </Box>
        );
    }
}

export default HomeScreen;