import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LOGIN</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry />

      <TouchableOpacity 
        style={styles.botao}
        onPress={() => navigation.navigate('Página Inicial')}
      >
        <Text style={styles.botaoTexto}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
