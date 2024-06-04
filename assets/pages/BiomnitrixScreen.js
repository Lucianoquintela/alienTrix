import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { styles } from './styles/stylePaginasDosRelogios';

import ListaDeAliensBiomnitrix  from '../../components/ListaDeAliensBiomnitrix.js';

export default function AboutScreen() {
  const navigation = useNavigation()

  const route = useRoute()
 

  const handleHomeClick = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <ListaDeAliensBiomnitrix/>
    </View>
  )
}

