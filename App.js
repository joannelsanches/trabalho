import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {FontAwesome6} from '@react-native-vector-icons/fontawesome6';

import Home from   './screens/Home';
import Pontos from './screens/Pontos';
import Sobre from  './screens/Sobre';
import Maps from   './screens/Maps';
import Login from  './screens/Login';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor : '#0079c9ff',        // Cor texto tab ativa
          tabBarActiveBackgroundColor : '#bdbdbdff',  // Cor fundo tab ativa
          tabBarInactiveTintColor: '#bdbdbdff',       // Cor texto tab Inativa
          tabBarInactiveBackgroundColor: '#0079c9ff', // Cor fundo tab Inativa
          headerStyle: { backgroundColor: '#0079c9ff' }, // Cor fundo cabecalho
          headerTintColor: '#bdbdbdff',               // Cor texto do cabecalho
          tabBarStyle: { backgroundColor: '#bdbdbdff' }, 
          tabBarShowLabel: true ,                       // Remove o texto    
        }}
      >

        <Tab.Screen 
          name='Página Inicial' 
          component={Home}
          options={{
            tabBarIcon: ({focused}) => 
              <FontAwesome6 
                name='house' 
                size={20} 
                iconStyle='solid' 
                color={focused ? '#851f00ff' : '#bdbdbdff'}
              />
          }}
        />
        
        <Tab.Screen 
          name='Pontos Turisticos'  
          component={Pontos}
          options={{
            tabBarIcon: ({focused}) => 
              <FontAwesome6 
                name='sliders' 
                size={20} 
                iconStyle='solid' 
                color={focused ? '#851f00ff' : '#bdbdbdff'}
              />
          }}
        />
        <Tab.Screen
          name='Maps'
          component={Maps}
          options={{
            tabBarIcon: ({focused}) => 
              <FontAwesome6 
                name='map' 
                size={20} 
                iconStyle='solid' 
                color={focused ? '#0079c9ff' : '#bdbdbdff'}
              />
          }}
        />
        <Tab.Screen 
          name='Sobre'          
          component={Sobre}
          options={{
            tabBarIcon: ({focused}) => 
              <FontAwesome6 
                name='circle-info' 
                size={20} 
                iconStyle='solid' 
                color={focused ? '#0079c9ff' : '#bdbdbdff'}
              />
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
