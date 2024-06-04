import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { styles } from './styles/stylePaginasDosRelogios'

import ListaDeAliensOmnimatrix from '../../components/ListaDeAliensOmnimatrix';

export default function AboutScreen() {
  const navigation = useNavigation()

  const route = useRoute()
 

  const handleHomeClick = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
     <ListaDeAliensOmnimatrix/>
    </View>
  )
}

