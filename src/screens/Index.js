import React, { Component } from 'react';
 import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
  } from 'react-navigation';

const AuthNavigator = createStackNavigator (
    {
        _Login: {
            getScreen: () => require('./LoginScreen').default,
        },
        get Login() {
            return this._Login;
        },
        set Login(value) {
            this._Login = value;
        },
    },
    {
        navigationOptions:{
            header:null,
        },
    },
);

const TabNavigator = createBottomTabNavigator ({
    _Home: {
        getScreen: () => require('./HomeScreen').default,
    },
    get Home() {
        return this._Home;
    },
    set Home(value) {
        this._Home = value;
    },
});

const MainNavigator = createStackNavigator ({
    Tab: TabNavigator,
});

const AppNavigator = createSwitchNavigator (
    {
        _Splash: {
            getScreen: () => require('./SplashScreen').default,
        },
        get Splash() {
            return this._Splash;
        },
        set Splash(value) {
            this._Splash = value;
        },

    Auth:AuthNavigator,
    Main:MainNavigator,
    },
    {
        initialRouteName:'Splash',
    },
);

class Navigation extends Component {
    state = {};
    render(){
        return <AppNavigator/>;
    }
}

export default Navigation;
