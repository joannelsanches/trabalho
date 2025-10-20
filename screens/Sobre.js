import { View, Text } from 'react-native';
import styles from '../styles';

export default function Sobre(){

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre o Aplicativo</Text>
            <Text>Criado na aula da Desenvolvimento para Dispositivos Móveis</Text>
        </View>
    );

}