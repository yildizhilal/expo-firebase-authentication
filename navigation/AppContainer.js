import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from '../screens/Homepage';
import Signin from '../screens/Signin';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

const AppNavigationContainer = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
            
        <Stack.Screen name="SignUp"  component={SignUp} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigationContainer;