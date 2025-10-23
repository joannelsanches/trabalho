import { View, Text } from 'react-native';
import styles from '../styles';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre o Aplicativo</Text>
      <Text style={styles.texto}>
        O aplicativo *Alphínia TOUR* foi desenvolvido para que os hóspedes
        do Alphínia Palace Hotel possam explorar os principais pontos turísticos
        da Escócia com facilidade.
      </Text>
    </View>
  );
}
