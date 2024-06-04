// Estilos dos Componentes da lista de aliens

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listaDeAliens: {
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 30
  },

  nomeAlien: {
    color: 'white',
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },

  cardsAliens: {
    backgroundColor: '#0A9019',
    width: 250,
    height: 470,
    borderRadius: 10,
    color: 'white',
  
  },

   especieAlien: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  },

  descricao: {
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
    marginHorizontal: 10
   
  },

   areaRolagem: {
    width: '100%',
    maxHeight: 100,
    padding: 5,
    marginBottom: 10,
    
  },

  imagemsDeAliens: {
    margin: 'auto',
    marginTop: 20,
    border: ['solid'],
    width: '205px',
    height: '250px',
    marginVertical: 20
  },
});
