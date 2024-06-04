import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import { styles } from './styles';

export default function () {
  return (
    <ScrollView style={styles.areaBotoes} showsVerticalScrollIndicator={true}>
      <View style={styles.listaDeAliens}>
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Glutãozão</Text>
          <Text style={styles.especieAlien}>
            Espécie: To'kustar e Gourmando
          </Text>
          <Image 
           source={require('../assets/images/glutaozao.webp')}
          style={styles.imagemsDeAliens} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Após se alimentar, ele pode lançar a energia de volta em forma de
              esfera e gosma explosiva, além de poder fazer um furacão de
              energia verde e alimentar-se dele, como uma grande fonte de
              energia.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Quatronormossauro</Text>
          <Text style={styles.especieAlien}>Espécie: Vaxasauriano e Tetramando</Text>
          <Image 
          source={require('../assets/images/quatronormossauro.webp')}
          style={styles.imagemsDeAliens} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Tanto Enormossauro quanto Quatro Braço tem super-força. Com a
              fusão, as forças dos dois se combinam, permitindo uma força muito
              avantajada.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Gosmossauro</Text>
          <Text style={styles.especieAlien}>Espécie: Polymorpho e Vaxasauriano</Text>
          <Image
           source={require('../assets/images/gosmossauro.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Gosmossauro possui uma imensa força física podendo erguer e
              destruir objetos muito maiores que ele. Esta é a sua principal
              habilidade. Seu crescimento contribui juntamente para sua super
              força, levando-o a ser um dos alienígenas mais fortes de Ben
              10.000.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Ultra diabrete</Text>
          <Text style={styles.especieAlien}>Espécie: Mecamorfo galvânico e Planchaküle</Text>
          <Image
           source={require('../assets/images/ultra-diabrete.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Seu físico é o de Diabrete, com nariz, orelhas, barriga, braços e
              pernas maiores, e a "pintura" de Ultra T. Na ponta de sua cauda,
              tem uma tomada semelhante à de Feedback. Em suas mãos tem garras
              afiadas. O Biomnitrix fica no meio do seu rosto.Sendo a fusão de
              Ultra T com Diabrete, Ultra Diabrete pode destruir, reconstruir,
              atualizar, e se combinar com todo tipo de máquina.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Atômico X</Text>
          <Text style={styles.especieAlien}>Espécie: Sapien Celestial
e Espécie Desconhecida</Text>
          <Image
          source={require('../assets/images/atomico-x.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Atômico X é a fusão dos alienígenas Alien X com Atômico. Só pode
              ser acessada usando o Biomnitrix.Fisicamente, Atômico X é
              semelhante a Atômico, e com a coloração de Alien X. Sua cabeça é
              nos moldes de Alien X, com o queixo de Atômico e as sobrancelhas
              de Atômico no formato dos três chifres de Alien X. A parte
              superior de seu corpo é de Alien X com detalhes de Atômico, com as
              cápsulas de um líquido esverdeado em seus ombros e braços. Usa um
              cinto verde, e tem faixas verde e branca em suas pernas.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Crashocker</Text>
          <Text style={styles.especieAlien}>Espécie: Gimlinopithecus
e Espécie Desconhecida</Text>
          <Image
          source={require('../assets/images/crashocker.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Crashocker tem a capacidade de liberação de fortes cargas
              elétricas de seu corpo. Seus parafusos elétricos são tão fortes
              que dão a Crashocker a capacidade de eletrocutar uma criatura
              muito maior do que ele.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
