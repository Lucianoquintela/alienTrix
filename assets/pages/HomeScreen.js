import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CaixaDeTexto from '../../components/CaixaDeTexto';
import { styles } from './styles/stylesHomeScreen';

export default function HomeScreen() {
  const navigation = useNavigation();

  const prototipoOmnitrixScreen = () => {
    navigation.navigate('Protótipo Omnitrix');
  };
  const omnitrixRecalibradoScreen = () => {
    navigation.navigate('Omnitrix Recalibrado'); 
  };
  const superomnitrixScreen = () => {
    navigation.navigate('Superomnitrix'); 
  };
  const omnimatrixScreen = () => {
    navigation.navigate('Omnimatrix');
  };
  const biomnitrixScreen = () => {
    navigation.navigate('Biomnitrix');
  };

  return (
    <View style={styles.container}>
       
      <Text style={styles.titulo}>Lista de Relógios:</Text>

      <View style={styles.containerBotoes}>
        <Pressable
          activeOpacity={0.3}
          style={styles.botaoRelogio}
          onPress={prototipoOmnitrixScreen}>
          <Text style={styles.textoRelogio}>Protótipo Omnitrix</Text>
        </Pressable>

        <Pressable
          style={styles.botaoRelogio}
          onPress={omnitrixRecalibradoScreen}>
          <Text style={styles.textoRelogio}>Omnitrix Recalibrado</Text>
        </Pressable>

        <Pressable style={styles.botaoRelogio} onPress={superomnitrixScreen}>
          <Text style={styles.textoRelogio}>Superomnitrix</Text>
        </Pressable>

        <Pressable style={styles.botaoRelogio} onPress={omnimatrixScreen}>
          <Text style={styles.textoRelogio}>Omnimatrix</Text>
        </Pressable>

        <Pressable style={styles.botaoRelogio} onPress={biomnitrixScreen}>
          <Text style={styles.textoRelogio}>Biomnitrix</Text>
        </Pressable>
      </View>
    </View>
  );
}


