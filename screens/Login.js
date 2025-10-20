import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

export default function Login(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>LOGIN</Text>

            <TextInput placeholder='email' style={styles.input}/>
            <TextInput placeholder='senha' style={styles.input} secureTextEntry={true} />

            <TouchableOpacity 
                style={styles.botao}
                onPress={ () => navigation.navigate('Página Inicial')}
            >
                <Text style={styles.botaoTexto}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );

}