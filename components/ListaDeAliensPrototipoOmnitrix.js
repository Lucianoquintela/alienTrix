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
          <Text style={styles.nomeAlien}>Chama</Text>
          <Text style={styles.especieAlien}>Espécie: Pyronita</Text>
          <Image
            source={require('../assets/images/chama.jpg')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Pyronitas são uma espécie humanoide baseada principalmente em
              magma. Seu corpo é constituído por um interior de magma brilhante
              coberto por rochas vermelhas escuras e marrons. Como entidades
              baseadas em fogo, seu corpo irradia grandes quantidades de calor.
              Seus pés têm apenas dois dedos e uma parte traseira pontuda.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Diamante</Text>
          <Text style={styles.especieAlien}>Espécie: Petrosapien</Text>
          <Image
            source={require('../assets/images/diamante.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Os Petrosapiens são uma raça alienígena que tem a maior parte de
              seu corpo feita de Silício. Seu corpo parece feito de esmeralda em
              vez de diamante, ele é muito mais duro do que a pedra preciosa.
              Ele pode refletir luz, armas a laser e coisas do tipo, podemos ter
              uma idéia de como é isso em Diamante no episódio E Então Eram 10.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Besta</Text>
          <Text style={styles.especieAlien}>Espécie: Vulpimancer</Text>
          <Image
            source={require('../assets/images/besta.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Besta parece um cão grande e laranja sem olhos e cauda. Seus
              dentes são muito grandes e ficam fora da sua boca. Besta não
              possui olhos, em vez disso ele utiliza seu senso de olfato e
              audição no lugar da visão, que são auxiliados por três narinas
              localizadas em cada lado de seu pescoço. Besta usava uma cinta
              preta com detalhes brancos e cinzas com o símbolo do Omnitrix em
              seu ombro esquerdo.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Quatro-Braços</Text>
          <Text style={styles.especieAlien}>Espécie: Tetramando</Text>
          <Image
            source={require('../assets/images/quatro-bracos.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Quatro Braços é um alienígena humanoide que é de aproximadamente
              3,60 metros de altura, tem músculos avantajados, dois pares de
              braços de quatro dedos e pele vermelha bem desenvolvida. A listra
              preta vai desde o queixo até o lábio inferior, e ele tem quatro
              olhos: um par principal e um par menor abaixo deles. Na série
              original, Quatro Braços veste uma traje branco com uma linha preta
              seguindo para baixo, calças pretas e luvas sem dedos.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Massa Cinzenta</Text>
          <Text style={styles.especieAlien}>Espécie: Galvaniano</Text>
          <Image
            source={require('../assets/images/massa-cinzenta.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Massa Cinzenta é um alienígena de pele cinza, e semelhante a um
              sapo humanoide. Tem quinze centímetros de altura, e usa uma roupa
              branca com uma faixa preta passando pelo seu corpo. Seus olhos são
              verdes e suas pupilas são retangulares, pretas.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>XLR8</Text>
          <Text style={styles.especieAlien}>Espécie: Kinecelerano</Text>
          <Image
            source={require('../assets/images/xlr8.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              XLR8 lembra um Velociraptor semi-blindado. Alienígena esbelto, com
              braços finos que possuem três garras em cada mão, e duas garras
              nos pés por cima de bolas pretas que as usa quando corre, além de
              dar suporte as suas longas pernas.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Ultra-T</Text>
          <Text style={styles.especieAlien}>Espécie: Mecamorfo galvânico</Text>
          <Image
            source={require('../assets/images/ultra-t.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Ultra T tem a maioria da sua pele branca com suas costas, braços e
              cabeça pretas com listras verdes
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Aquático</Text>
          <Text style={styles.especieAlien}>Espécie: Pisccis volann</Text>
          <Image
            source={require('../assets/images/aquatico.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Aquático é um alienígena que podemos nos referir como um tritão,
              sua cabeça lembra a de um peixe pescador.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Fantasmático</Text>
          <Text style={styles.especieAlien}>Espécie: Ectonurita</Text>
          <Image
            source={require('../assets/images/fantasmatico.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Fantasmático é semelhante a um fantasma branco, com linhas pretas
              passando por seu corpo e seu olho é roxo. O Omnitrix localiza-se
              dentro de uma das linhas em seu peito. Sua cauda lembra bastante
              uma fumaça, sendo confirmado que inicialmente ele era para ser
              baseado em um gênio da lâmpada.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Insectóide</Text>
          <Text style={styles.especieAlien}>Espécie: Lepidopterrano</Text>
          <Image
            source={require('../assets/images/insectoide.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Insectóide é um inseto com quatro longas pernas, e dois braços com
              mãos pretas, dando uma impressão de que está usando luvas, e três
              dedos em cada um delas. Sua cabeça é completamente preta, e nela
              estão ligados quatro olhos pequenos e laranjas. Em suas costas,
              tem uma grande e frágil asa verde transparente. Insectóide veste
              um traje branco com linhas pretas, e no final de seu corpo tem um
              ferrão preto e afiado. O Omnitrix fica localizado em seu rosto.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Bala de Canhão</Text>
          <Text style={styles.especieAlien}>Espécie: Pelarota Arburiano</Text>
          <Image
            source={require('../assets/images/bala-de-canhao.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Bala de Canhão é desajeitado. Ele é um alienígena de ombros largos
              cobertos naturalmente por uma blindagem amarela em suas costas,
              ombros e em seus braços. É a única serie em que ele tem olhos
              amarelos. Ele é predominantemente branco com preto na sua metade
              superior e tem uma faixa preta de seu nariz, passando pelas costas
              até o peito. Cada mão possui quatro garras e tem dentes afiados.
              Bala de Canhão usa o símbolo do Omnitrix em sua testa.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Cipó Selvagem</Text>
          <Text style={styles.especieAlien}>Espécie: Florauna</Text>
          <Image
            source={require('../assets/images/cipo-selvagem.png')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Cipó Selvagem é um alienígena fibroso constituído principalmente
              por plantas orgânicas e cipós derivados, e possui formato
              humanoide com seis raízes que substituem as tradicionais duas
              pernas desta classificação. De pele verde em diferente
              tonalidades, Cipó possui muitas mechas de folhas caindo por seu
              tórax e braços, além de uma pequena cabeça com um grande e único
              olho azul, encoberta por uma grande planta carnívora verde com
              espinhos amarelados. Possui seis sementes nascendo por suas
              costas, e duas maiores similares ao seu olho no ombro. Possui o
              símbolo do Omnitrix no centro do peito.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Glutão</Text>
          <Text style={styles.especieAlien}>Espécie: Gourmando</Text>
          <Image
            source={require('../assets/images/glutao.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              O Glutão original é um alienígena pequeno e meio gorducho. Sua cor
              predominante é verde, porém veste roupas branca e preta. Glutão
              tem uma cauda verde e várias protuberâncias na região de seu
              pescoço, além de várias guelras na mesma região. O Omnitrix
              encontra-se no seu pulso esquerdo.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Mega Olhos</Text>
          <Text style={styles.especieAlien}>Espécie: Opticóide</Text>
          <Image
            source={require('../assets/images/mega-olhos.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              A parte superior do corpo de Mega Olhos é coberta com olhos verdes
              com pupilas negras, embora, ironicamente, não tem olhos em sua
              cabeça, que consiste de uma boca e um par muito grande de orelhas
              semelhantes as de um morcego.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Gigante</Text>
          <Text style={styles.especieAlien}>Espécie: To'kustar</Text>
<Image source={require('../assets/images/gigante.webp')} style={styles.imagemsDeAliens}/>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Esse alienígena foi destravado por Azmuth (o inventor do
              Omnitrix), ele apareceu exclusivamente no filme na luta contra o
              grupo de Boss gigantes de Vilgax. Esse alienígena tem mais ou
              menos o tamanho de um arranha-céu gigantesco ou então maior, sendo
              um dos aliens mais poderosos do arsenal do Omnitrix, do
              SuperOmnitrix e do Omnitrix.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Cuspidor</Text>
          <Text style={styles.especieAlien}>Espécie: Spheroid</Text>
<Image source={require('../assets/images/cuspidor.webp')} style={styles.imagemsDeAliens}/>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Cuspidor é um alien que tem a aparência semelhante a de um Baiacu.
              Ele tem 3 pontas saindo da parte superior e inferior da cabeça.
              Sua boca cobre a maior parte frontal superior dele, que é
              preenchido com as cores esmaecidas e dentes pontiagudos.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Iguana Ártica</Text>
          <Text style={styles.especieAlien}>Espécie: Polar manzardill</Text>
<Image source={require('../assets/images/iguana-artica.webp')} style={styles.imagemsDeAliens}/>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Iguana Ártica é uma iguana alienígena azul. Ele tem três
              barbatanas atingindo pelas costas e brânquias nas laterais da
              cabeça. Ele também tem pequenos picos ao redor de seu rosto.
              Iguana Ártica veste uma calça branca que vai até seu tórax
              acompanhado de um tecido preto que cobre toda suas costas e seus
              braços, sendo que seus pulsos são no mesmo branco que sua calça
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Chocante</Text>
          <Text style={styles.especieAlien}>Espécie: Nosedeeniano</Text>
<Image source={require('../assets/images/chocante.webp')} style={styles.imagemsDeAliens}/>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Chocante é um alienígena pequeno, sendo muito similar a uma
              espécie de bateria humanoide. É inteiramente preto, e de olhos
              verdes. Em seu peito tem uma listra branca em formato de
              relâmpago, que vai de seu pescoço até onde suas pernas começam.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Eon</Text>
          <Text style={styles.especieAlien}>Espécie: Chroniano</Text>
<Image source={require('../assets/images/eon.png')} style={styles.imagemsDeAliens}/>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              No filme,Ben 10 Corrida contra o tempo Eon põe seu DNA no
              Omnitrix, fazendo com que Ben seja um "outro Eon" e ao mesmo tempo
              adicionando-o no Omnitrix como alien de Ben. Uma curiosidade é que
              o DNA da raça de Eon é o mais raro de todo o universo, por isso o
              Omnitrix fica roxo (ao invés de amarelo girando) quando Eon coloca
              seu DNA no Omnitrix.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Blitzwolfer</Text>
          <Text style={styles.especieAlien}>Espécie: Loboan</Text>
<Image source={require('../assets/images/blitzwolfer.webp')} style={styles.imagemsDeAliens}/>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Blitzwolfer é um lobisomem, com cores cinzas predominantes, que
              vão variando de clara ou escura em seu corpo. É um alienígena
              musculoso, tendo em suas mãos três garras afiadas, e também em
              seus pés, sendo uma delas traseira. Tem uma espécie de espinho em
              cada um de seus ombros, e uma longa cauda cinza escura. Veste um
              traje branco com detalhes pretos.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Snare-oh</Text>
          <Text style={styles.especieAlien}>Espécie: Thep Khufan</Text>
<Image source={require('../assets/images/snare-oh.png')} style={styles.imagemsDeAliens}/>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Snare-oh é um alienígena alto, coberto de bandagens, tendo a
              aparência baseada em uma múmia. Seus olhos e as lacunas entre as
              ataduras são de brilho verde. Ele tem um nemes preto e dourado
              localizado em sua cabeça, que também tem uma máscara dourada.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Frankenstrike</Text>
          <Text style={styles.especieAlien}>Espécie: Transiliano</Text>
<Image source={require('../assets/images/frankenstrike.webp')} style={styles.imagemsDeAliens}/>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Frankenstrike tem uma aparência semelhante à representação
              clássica da versão de Boris Karloff do monstro de Victor
              Frankenstein. Ele tem um corpo musculoso com nariz humano, cabelo
              preto com costeletas e um par de parafusos em cada lado do pescoço
              que são verdes no vinco. Ele usa luvas de metal com os dedos à
              mostra e calças de metal com linhas sobre eles com traços de
              triângulo verde brilhante no meio.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Idem</Text>
          <Text style={styles.especieAlien}>Espécie: Splixion</Text>
<Image source={require('../assets/images/idem.webp')} style={styles.imagemsDeAliens}/>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Idem tem a altura de uma criança média humana. Tem a pele branca,
              uma cabeça preta, rosto branco e ombros pretos. Clone, como era
              chamado na época, tem mãos grandes, com quatro dedos e seus pés
              são tocos. Ele tem três "barbatanas" em sua cabeça. Idem também
              tem "orbes" em seus braços e três "crateras" na sua cintura. O
              alien também usa roupas negras com pequenos detalhes brancos. O
              símbolo do Omnitrix está fixado em sua testa.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
