// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WifiList from '../App/WifiList';
import WifiPassword from '../App/WifiPassword';
import WifiSuccess from '../App/WiFiSuccess';



const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WifiList"
          component={WifiList}
          options={({navigation, route}) => ({
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="WifiPassword"
          component={WifiPassword}
          options={({navigation, route}) => ({
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="WifiSuccess"
          component={WifiSuccess}
          options={({navigation, route}) => ({
            headerTitle: '',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
