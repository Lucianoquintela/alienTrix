import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// telas do aplicativo
import HomeScreen from '../pages/HomeScreen';
import PrototipoOmnitrixScreen from '../pages/PrototipoOmnitrixScreen.JS';
import OmnitrixRecalibradoScreen from '../pages/OmnitrixRecalibradoScreen.js';
import SuperomnitrixScreen from '../pages/SuperomnitrixScreen';
import OmnimatrixScreen from '../pages/OmnimatrixScreen';
import BiomnitrixScreen from '../pages/BiomnitrixScreen';

const MainStack = createNativeStackNavigator();
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'AlienTrix',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#3CB371',
            height: 50,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />

      <MainStack.Screen
        name="Protótipo Omnitrix"
        component={PrototipoOmnitrixScreen}
        options={({ route }) => ({
          title: route.params?.name,
          headerStyle: {
            backgroundColor: '#3CB371',
            height: 50,
          },

          headerTitleStyle: {
            color: '#fff',
          },
        })}
      />

      <MainStack.Screen
        name="Omnitrix Recalibrado"
        component={OmnitrixRecalibradoScreen}
        options={({ route }) => ({
          title: route.params?.nome,
          headerStyle: {
            backgroundColor: '#3CB371',
            height: 50,
          },

          headerTitleStyle: {
            color: '#fff',
          },
        })}
      />

      <MainStack.Screen
        name="Superomnitrix"
        component={SuperomnitrixScreen}
        options={({ route }) => ({
          title: route.params?.nome,
          headerStyle: {
            backgroundColor: '#3CB371',
            height: 50,
          },

          headerTitleStyle: {
            color: '#fff',
          },
        })}
      />

      <MainStack.Screen
        name="Omnimatrix"
        component={OmnimatrixScreen}
        options={({ route }) => ({
          title: route.params?.nome,
          headerStyle: {
            backgroundColor: '#3CB371',
            height: 50,
          },

          headerTitleStyle: {
            color: '#fff',
          },
        })}
      />

      <MainStack.Screen
        name="Biomnitrix"
        component={BiomnitrixScreen}
        options={({ route }) => ({
          title: route.params?.nome,
          headerStyle: {
            backgroundColor: '#3CB371',
            height: 50,
          },

          headerTitleStyle: {
            color: '#fff',
          },
        })}
      />
    </MainStack.Navigator>
  );
};
