import {
    View,
    Text,
    FlatList,
    Image,
    Alert,
    TouchableOpacity,
} from "react-native";
import styles from "../styles";

const pontosTuristicos = [
  {
    id: '1',
    nome: 'Castelo de Edimburgo',
    descricao: 'Uma fortaleza histórica que domina a silhueta da cidade de Edimburgo, a capital da Escócia.',
    imagem: require('../assets/edim.jpg')
  },
  {
    id: '2',
    nome: 'Castelo de Urquhart',
    descricao: 'Uma fortaleza em ruínas localizada às margens do Lago Ness, nas Terras Altas da Escócia.',
    imagem: require('../assets/urq.jpg')
  },
  {
    id: '3',
    nome: 'Ilha de Skye',
    descricao: 'Conhecida por suas paisagens acidentadas, vilas de pescadores pitorescas e castelos medievais.',
    imagem: require('../assets/sky.jpg')
  },
  {
    id: '4',
    nome: 'Palácio de Holyroodhouse',
    descricao: 'A residência oficial do monarca na Escócia, localizada no final da Royal Mile em Edimburgo.',
    imagem: require('../assets/hol.jpg')
  },
];

const PontoItem = ({ nome, descricao, imagem }) => (
    <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => Alert.alert(nome, descricao)}
    >
        <Image source={imagem} style={styles.itemImage} />
        <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>{nome}</Text>
        </View>
    </TouchableOpacity>
);

export default function Pontos() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Visitas Turísticas oferecidas pelo {"\n"} Alphínia Palace
            </Text>
            <FlatList
                style={{ width: "100%" }}
                data={pontosTuristicos}
                renderItem={({ item }) => <PontoItem {...item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    paddingVertical: 20,
                    paddingHorizontal: 15,
                    gap: 15,
                }}
            />
        </View>
    );
}
