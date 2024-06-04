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
          <Text style={styles.nomeAlien}>Macaco Aranha</Text>
          <Text style={styles.especieAlien}>Espécie: Arachnachimp</Text>
          <Image 
          source={require('../assets/images/macaco-aranha.png')}
          style={styles.imagemsDeAliens} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Macaco-Aranha tem corpo de macaco com pelo azul e possui quatro
              braços, possui quatro olhos que são pretos com contorno verde, sua
              cauda é preta com duas listras azuis, possui uma linha em forma de
              raio negra passa pelo símbolo do Omnitrix/Superomnitrix e da
              listra até sua barriga são azuis de uma tonalidade mais escura.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Enormossauro</Text>
          <Text style={styles.especieAlien}>Espécie: Vaxasauriano</Text>
          <Image 
          source={require('../assets/images/enormossauro.webp')}
          style={styles.imagemsDeAliens} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Enormossauro tem um corpo grande humanoide de aproximadamente 3,60
              metros, com uma pele dura e marrom. Quando ele cresce, suas
              características de dinossauro são mais acentuadas, como placas do
              dinossauro Estegossauro que crescem em suas costas, cabeça e
              cauda. Ele carrega o símbolo do Omnitrix/Superomnitrix no peito.
            </Text>
          </ScrollView>
        </View>

         <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Friagem</Text>
           <Text style={styles.especieAlien}>Espécie: Necrofriggiano</Text>
             <Image 
             source={require('../assets/images/friagem.webp')}
              style={styles.imagemsDeAliens}/>
           <ScrollView showsVerticalScrollIndicator={false} style={styles.areaRolagem}>
             <Text style={styles.descricao}>Friagem é um alienígena humanoide, semelhante a uma mariposa, cujas quatro asas e antena se dobram em um manto com capuz (muito parecido com um poncho), dando-lhe a aparência de um fantasma. Ele tem um corpo preto com manchas ciano nos braços, ombros, pernas, na parte de trás das asas e na parte de trás do pescoço, que se assemelham a pedaços de gelo. Cada mancha tem um contorno azul espesso, exceto os de suas asas, que são contornados em preto. Há também uma linha preta que corre na borda da margem externa na parte de trás de cada asa.</Text>
           </ScrollView>
         </View>
  
          <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Fogo Fátuo</Text>
           <Text style={styles.especieAlien}>Espécie: Metanosiano</Text>
             <Image  
             source={require('../assets/images/fogo-fatuo.webp')}
             style={styles.imagemsDeAliens}/>
           <ScrollView showsVerticalScrollIndicator={false} style={styles.areaRolagem}>
             <Text style={styles.descricao}>Fogo Fátuo possui a aparência de uma planta humanoide, com o corpo de coloração verde. Tem um rosto negro que é cercado por partes vermelhas e amarelas que deixam sua cabeça semelhante a do Chama. Seus pés são um pouco grandes, sendo semelhantes a raízes. Em seus ombros, tem pétalas vermelhas, e seus braços e pernas tem espinhos para fora. O Omnitrix/Superomnitrix está localizado em seu peito.</Text>
           </ScrollView>
         </View>

         <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Gosma</Text>
           <Text style={styles.especieAlien}>Espécie: Polymorpho</Text>
             <Image 
             source={require('../assets/images/gosma.webp')}
              style={styles.imagemsDeAliens}/>
           <ScrollView showsVerticalScrollIndicator={false} style={styles.areaRolagem}>
             <Text style={styles.descricao}>Gosma é um ser humanoide feito de gosma, obviamente. Ele usa um Projetor de antigravidade para ter controle em seus movimentos e falar. O Omnitrix/Superomnitrix localiza-se em seu peito.</Text>
           </ScrollView>
         </View>

         <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Artrópode</Text>
           <Text style={styles.especieAlien}>Espécie: Cerebrocrustaceano</Text>
             <Image 
             source={require('../assets/images/artropode.webp')}
              style={styles.imagemsDeAliens}/>
           <ScrollView showsVerticalScrollIndicator={false} style={styles.areaRolagem}>
             <Text style={styles.descricao}>Artrópode tem uma aparência de um caranguejo de corpo laranja, sua cabeça é uma estrutura oval inclinada com uma grande faixa preta separando a parte do cérebro dos olhos e boca, sua boca é uma linha arredondada preta com uma parte branca da parte de dentro. Tem duas grandes pinças aonde seriam os braços, com uma faixa preta fixada em cada pinça. Ele usa um cinto preto e cinza onde tem seu Omnitrix/Superomnitrix, suas pernas são iguais aos de um caranguejo, a única diferença é que ele tem 3 pares.</Text>
           </ScrollView>
         </View>
 
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Cromático</Text>
           <Text style={styles.especieAlien}>Espécie: Crystalsapien</Text>
             <Image  
             source={require('../assets/images/cromatico.webp')}
             style={styles.imagemsDeAliens}/>
           <ScrollView showsVerticalScrollIndicator={false} style={styles.areaRolagem}>
             <Text style={styles.descricao}>Cromático é um alienígena baseado em um silíciode cristal extremamente durável. Seu corpo é de cor púrpura com várias linhas escuras e manchas. Suas mãos e cara são magenta, também possui 6 cacos magenta nas costas, 2 nos peito e um na parte superior da cabeça, como um chifre. Sua face tem uma boca grande e um olho verde no centro.</Text>
           </ScrollView>
         </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Eco Eco</Text>
           <Text style={styles.especieAlien}>Espécie: Sonorosiano</Text>
             <Image 
             source={require('../assets/images/eco-eco.webp')}
              style={styles.imagemsDeAliens}/>
           <ScrollView showsVerticalScrollIndicator={false} style={styles.areaRolagem}>
             <Text style={styles.descricao}>Eco Eco é um pequeno alienígena branco feito de silício, cujo o corpo assemelha-se um amplificador vivo. Uma das características mais notáveis ​é um apêndice que lembra um MP3 atrás das costas com uma porta sobre ela, decorada com um símbolo de IO e que se parece com fitas cassetes em suas pernas. Eco Eco, assim como a maioria dos alienígenas de Força Alienígena e Supremacia Alienígena, usa o símbolo do Omnitrix/Superomnitrix em seu peito.</Text>
           </ScrollView>
         </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Arraia-A-Jato</Text>
           <Text style={styles.especieAlien}>Espécie: Aerofibiano</Text>
             <Image  
              source={require('../assets/images/arraia-a-jato.webp')}
             style={styles.imagemsDeAliens}/>
           <ScrollView showsVerticalScrollIndicator={false} style={styles.areaRolagem}>
             <Text style={styles.descricao}>Ele é um alienígena humanoide parecido com uma arraia, ele é vermelho, com dois relâmpagos, com listras negras descendo dos ombros até o símbolo do Omnitrix/Superomnitrix em seu tórax. Ele tem olhos verdes, chifres amarelos que se estendem do centro de seus dois olhos, o que parecem guelras debaixo dos braços e asas amarelas que ele usa para voar e deslizar através da água em alta velocidade. Estas duas asas estão ligadas a seus braços, e se parecem com a abas de pele de um esquilo voador ou petauro do açúcar.</Text>
           </ScrollView>
         </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Alien X</Text>
           <Text style={styles.especieAlien}>Espécie: Sapien Celestial</Text>
             <Image 
             source={require('../assets/images/alien-x.webp')}
             style={styles.imagemsDeAliens}/>
           <ScrollView showsVerticalScrollIndicator={false} style={styles.areaRolagem}>
             <Text style={styles.descricao}>Alien X é um ser ilimitado, capaz de deformar a realidade, tempo e o espaço e fazer basicamente tudo aquilo que bem entender.</Text>
           </ScrollView>
         </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Estrela Polar</Text>
           <Text style={styles.especieAlien}>Espécie:Biosovortiano</Text>
             <Image 
             source={require('../assets/images/estrela-polar.webp')}
              style={styles.imagemsDeAliens}/>
           <ScrollView showsVerticalScrollIndicator={false} style={styles.areaRolagem}>
             <Text style={styles.descricao}>Estrela Polar tem uma cabeça metálica flutuante que levita entre os ombros, no entanto, ele ainda está ligado ao seu corpo como sempre que a cabeça vai, seu corpo segue como mostrado em Video Games. Ele tem garras semelhantes as de um caranguejo como mãos e seu corpo é basicamente preto com pés amarelos, mãos, ombros e peito. Sua boca raramente se move, mesmo quando ele está falando. Estrela Polar usa o símbolo do Omnitrix/Superomnitrix em seu peito.</Text>
           </ScrollView>
         </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Rath</Text>
           <Text style={styles.especieAlien}>Espécie: Appoplexiano</Text>
             <Image 
              source={require('../assets/images/rath.webp')}
             style={styles.imagemsDeAliens}/>
           <ScrollView showsVerticalScrollIndicator={false} style={styles.areaRolagem}>
             <Text style={styles.descricao}>Rath tem cerca de três metros de altura. Ele se assemelha a um tigre bípede laranja e branco com uma garra preta saindo de cada pulso e sem cauda. Ele também é musculoso e tem olhos verdes e listras pretas nos ombros, cabeça, pernas e parte superior do corpo, bem como mandíbula, pescoço, peito, estômago, mãos e pés brancos. O Omnitrix / Ultimatrix original está localizado no centro do peito. Tanto Gwen quanto Azmuth usam essas dicas de aparência como Rath.</Text>
           </ScrollView>
         </View>
        
       </View>    

        

    </ScrollView>
  );
}
