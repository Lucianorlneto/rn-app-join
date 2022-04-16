import React, { useContext } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Login, Home, Produtos, Categorias, Tela3,
} from '~/screens';

import CategoriaForm from '~/screens/Categorias/CategoriaForm/CategoriaForm';

import AuthContext from '~/context/auth';

import { AppColors } from '~/styles';

// import { Container } from './styles';

const CategoriasStack = createNativeStackNavigator();

const CategoriasScreensStack = () => (
  <CategoriasStack.Navigator initialRouteName="">
    <CategoriasStack.Screen name="Categorias" component={Categorias} />
    <CategoriasStack.Screen name="Categoria" component={CategoriaForm} />
  </CategoriasStack.Navigator>
);

const HomeStack = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const Main: () => Node = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (isLoggedIn
    ? (
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'account'
                : 'account-outline';
            } else if (route.name === 'Produtos') {
              iconName = focused ? 'archive' : 'archive-outline';
            } else if (route.name === 'CategoriasStack') {
              iconName = focused ? 'layers-triple' : 'layers-triple-outline';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: AppColors.colors.primary,
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <HomeStack.Screen
          name="Produtos"
          component={Produtos}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name="CategoriasStack"
          component={CategoriasScreensStack}
          options={{
            headerTitleAlign: 'center',
            title: 'Categorias',
          }}
        />
      </HomeStack.Navigator>
    )
    : (
      <RootStack.Navigator initialRouteName="">
        <RootStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </RootStack.Navigator>
    ));
};

export default Main;
