import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6f0', // fundo suave e quente
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },

  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#6b2e00', // marrom queimado inspirado no caule da folha
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'serif',
  },

  texto: {
    fontSize: 16,
    color: '#8b4513', // tom terroso elegante
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 22,
  },

  botao: {
    backgroundColor: '#c45c00', // laranja queimado (inspirado nas bordas da folha)
    borderColor: '#8b3500',
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },

  botaoTexto: {
    fontSize: 16,
    color: '#fffdf9',
    fontWeight: '700',
    textAlign: 'center',
  },

  input: {
    padding: 12,
    width: '80%',
    backgroundColor: '#f8e8dd', // bege rosado inspirado no fundo do logo
    borderColor: '#a0522d',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    color: '#5a2a00',
  },

  // Estilos para listas ou cards
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fffdf9',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    borderColor: '#d7b49e',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6b2e00',
    marginBottom: 5,
  },

  itemSubtitle: {
    fontSize: 14,
    color: '#8b4513',
  },
});
