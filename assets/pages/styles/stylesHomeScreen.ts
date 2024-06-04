import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  containerBotoes: {
    flexDirection: 'collumn',
    marginVertical: 10,
    height: 400,
    width: 240,
    gap: 20,
  },

  textoRelogio: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },

  botaoRelogio: {
    backgroundColor: '#3CB371',
    borderRadius: 10,
    padding: 11,
    textAlign: 'center',
  },
  titulo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
  },
});