import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem vinda(o) ao Alphínia Palace!</Text>

            <TouchableOpacity 
                style={styles.botao}
                onPress={ () => navigation.navigate('Login')}
            >
                <Text style={styles.botaoTexto}>SAIR</Text>
            </TouchableOpacity>
        </View>
    );

}