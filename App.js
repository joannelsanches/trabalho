import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

import Home from './screens/Home';
import Pontos from './screens/Pontos';
import Sobre from './screens/Sobre';
import Maps from './screens/Maps';
import Login from './screens/Login';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#0d3b66',
          tabBarActiveBackgroundColor: '#faf0ca',
          tabBarInactiveTintColor: '#faf0ca',
          tabBarInactiveBackgroundColor: '#0d3b66',
          headerStyle: { backgroundColor: '#0d3b66' },
          headerTintColor: '#faf0ca',
          tabBarStyle: { backgroundColor: '#0d3b66' },
          tabBarShowLabel: true,
        }}
      >
        <Tab.Screen 
          name="Página Inicial" 
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => 
              <FontAwesome6 
                name="house" 
                size={20} 
                color={focused ? '#f4a261' : '#faf0ca'} 
              />
          }}
        />
        <Tab.Screen 
          name="Pontos Turísticos" 
          component={Pontos}
          options={{
            tabBarIcon: ({ focused }) => 
              <FontAwesome6 
                name="landmark" 
                size={20} 
                color={focused ? '#f4a261' : '#faf0ca'} 
              />
          }}
        />
        <Tab.Screen 
          name="Mapa Geral" 
          component={Maps}
          options={{
            tabBarIcon: ({ focused }) => 
              <FontAwesome6 
                name="map" 
                size={20} 
                color={focused ? '#f4a261' : '#faf0ca'} 
              />
          }}
        />
        <Tab.Screen 
          name="Sobre" 
          component={Sobre}
          options={{
            tabBarIcon: ({ focused }) => 
              <FontAwesome6 
                name="circle-info" 
                size={20} 
                color={focused ? '#f4a261' : '#faf0ca'} 
              />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
