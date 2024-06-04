import { useState } from 'react'
import { View, Text, StyleSheet,TextInput } from 'react-native'

export default function(){

  return(
    <View >
        <TextInput
                placeholder="Buscar Alien"
                placeholderTextColor=""
                style={styles.input}
                
              />
   

    </View>
  )
}


  const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      padding: 10,
      margin: 20,
      fontWeight: 'bold'
    
    }
  
})
