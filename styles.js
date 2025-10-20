import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff4ef',
    alignItems: 'center',
    paddingTop: 40,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 20
  },
  botao: {
    backgroundColor: '#0188b1ff',
    borderColor: '#006c8dff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10
  }, 
  botaoTexto: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 700
  },
  input: {
    padding: 10,
    width: '80%',
    backgroundColor: '#e7e7e7ff',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  itemTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
