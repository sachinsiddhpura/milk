import React, { Component } from 'react' ; 
import { ActivityIndicator } from 'react-native';
import {UtilityThemeProvider,Box,Text} from 'react-native-design-utility';

import Navigation from './src/screens/Index';
import { images } from './src/constants/images';
import { cacheImages } from './src/utils/cacheImages';

  
export default class App extends React.Component {  

    state = {
        isReady : false,
    };

    componentDidMount(){
        this.cacheAssets();
    }

    cacheAssets = async() => {
        const imageAssests = cacheImages(Object.values(images));

        await Promise.all([...imageAssests]);

        this.setState({isReady : true});
    };
  
    render() {  
        if(!this.state.isReady){
            return (
                <Box f={1} center bg="white">
                    <ActivityIndicator size='large'/>
                </Box>
            );
        }
        return (  
            <UtilityThemeProvider>
                <Navigation/>
            </UtilityThemeProvider>
        );  
    }  
}  
