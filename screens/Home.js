import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Palace.png')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>Bem-vinda(o) ao Alphinia TOUR Palace!</Text>
      <Text style={styles.texto}>
        Descubra as belezas da Escócia durante sua estadia.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.botaoTexto}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}
