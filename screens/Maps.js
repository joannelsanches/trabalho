import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MapView, {Marker} from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Turismo no Alphínia Palace</Text>

      <MapView 
        style={{ width: '80%', height: '60%'}} 
        region={{
          latitude: 57.3241503,
          longitude: -4.4421184,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        }}
        mapType='hybrid'
      >
        
        <Marker 
          title='Castelo de Edimburgo'
          description='Edinburgh Castle'
          coordinate={{
            latitude: 55.9426014,
            longitude: -3.2343074,
          }}
        />

        <Marker 
          title='Castelo de Urquhart'
          description='Urquhart Castle'
          coordinate={{
            latitude: 57.3241503,
            longitude: -4.4421184,
          }}
        />

        <Marker 
          title='Ilha de Skye'
          description='Isle of Skye'
          coordinate={{
            latitude: 57.2734,
            longitude: -6.2155,
          }}
        />

        <Marker 
          title='Palácio de Holyroodhouse'
          description='Palace of Holyroodhouse'
          coordinate={{
            latitude: 55.9527,
            longitude: -3.1722,
          }}
        />  

      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff4ef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});