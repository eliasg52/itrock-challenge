import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@/screens/Login';
import { MainTabs } from './MainTabs';
import { useUserContext } from '@/context/useUserContext';

export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  const { userToken } = useUserContext();
  console.log('USER TOKEEEEEN', userToken);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userToken ? (
          <Stack.Screen name="MainTabs" component={MainTabs} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
