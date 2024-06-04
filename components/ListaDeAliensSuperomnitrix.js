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
          <Text style={styles.nomeAlien}>Nanomech</Text>
          <Text style={styles.especieAlien}>Espécie: Nanochip e humano</Text>
          <Image
            source={require('../assets/images/nanomech.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Nanomech é o menor alienígena a aparecer na continuidade de Ben
              10, com menos de 3 cm de altura. Nanomech é uma criação exclusiva
              do SuperOmnitrix, sendo uma fusão do DNA biomecânico dos Chips com
              o de Ben. Kevin afirma que ele não consegue levar Nanomech a sério
              por causa de sua voz.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Tartagira</Text>
          <Text style={styles.especieAlien}>Espécie: Geochelone aerio</Text>
          <Image
            source={require('../assets/images/tartagira.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Tartagira é uma tartaruga voadora com buracos no casco, seus olhos são verdes e sua boca se mexe, ele tem duas mãos e dois pés, quando ele junta suas duas pernas seu corpo se transforma praticamente em uma hélice. O símbolo do Superomnitrix está em seu peito. Provavelmente foi baseada na tartaruga gigante, embora tenha muitos traços da tartaruga de pente, um animal aquático.</Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Anfíbio</Text>
          <Text style={styles.especieAlien}>Espécie:Amperi</Text>
          <Image
            source={require('../assets/images/amphibio.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Anfíbio é um alienígena que assemelha-se a uma água-viva, mais exatamente a uma caravela portuguesa, pelo seu tamanho. É de cores azul e branco, com seis longos tentáculos que funcionam como dois pares de braços e um par de pernas. Anfíbio tem olhos verdes sem pupilas, e linhas brancas por todo o seu corpo, lembrando raios. O Superomnitrix localiza-se em seu peito.</Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Armatu</Text>
          <Text style={styles.especieAlien}>Espécie: Talpaedano</Text>
          <Image
            source={require('../assets/images/armatu.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Armatu tem um corpo amarelo blindado e se parece muito com um robô tatu. Sua cabeça é semelhante a um capacete grego, com dois chifres ou orelhas nele dando-lhe a aparência de um tatu. Armatu tem um rabo cinza e peças de britadeira em seus cotovelos, punhos e mãos, criando a impressão de que Armatu é um robô de escavação. Apesar do aspecto mecânico, todos estes aspectos são de fato biológicos e naturais. Armatu tem o símbolo do Superomnitrix em seu peito.</Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>NRG COM O TRAJE DE CONTENÇÃO</Text>
          <Text style={styles.especieAlien}>Espécie: Prypiatosian B</Text>
          <Image
            source={require('../assets/images/nrg-com-traje-de-contencao.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>O traje de contenção de NRG é cinza azulado em dois tons diferentes; em sua cabeça é um tom escuro onde possui três buracos, em seu tronco é claro e nele possui um selo do tom escuro o qual é conectado por todo o local, o ombro de seu traje é uma esfera enorme de tom escuro e seus braços são do tom claro e do escuro, o mesmo pode dizer de suas pernas. Possui pulseiras e joalheiras do tom claro com três parafusos. Em si sua aparência nada mais lembra do que um forno humanoide. Ele usa o símbolo do Superomnitrix no selo peitoral de sua armadura.</Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>NRG SEM O TRAJE DE CONTENÇÃO</Text>
          <Text style={styles.especieAlien}>Espécie: Prypiatosian B</Text>
          <Image
            source={require('../assets/images/nrg-sem-traje-de-contencao.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Fora de seu traje de contenção, sua verdadeira forma é um humanoide laranja feito de energia. Usa duas alças, um cinto, duas pulseiras em ambos os braços e duas cintas de joelho em ambas as pernas. O Omnitrix fica em seu cinto.</Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Ameaça Áquatica</Text>
          <Text style={styles.especieAlien}>Espécie: Orishano</Text>
          <Image
            source={require('../assets/images/ameaca-aquatica.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Ameaça Aquática tem um exoesqueleto blindado que protege o corpo da maioria dos tipos de danos, incluindo radiação. Aggregor Supremo disse que o exoesqueleto de Ameaça Aquática o faz completamente invulnerável. Ele possui uma força aprimorada. Como visto no episódio Problema de Estômago, em Omniverse ele pode dobrar sua carapaça ou fazer uma parte extra aparecer como uma máscara, além de poder contrair seu capacete[1], apesar de isso nunca ter sido mostrado em cena.</Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Acelerado</Text>
          <Text style={styles.especieAlien}>Espécie: Citrakayah</Text>
          <Image
            source={require('../assets/images/acelerado.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Acelerado é um alienígena semelhante a um felino com um esquema de cores preto. Suas mãos, pernas, e a parte de sua cabeça e o tórax são da cor azul. Ele tem "espinhos" em suas mãos e pernas. Ele também tem uma "máscara" preta semelhante a de Wolverine com barbatanas ao redor de seus olhos verdes. Ele tem um nariz em forma de triângulo e um "projeto de raio" em seu peito. Acelerado usa o símbolo do Superomnitrix em seu peito.</Text>
          </ScrollView>
        </View>
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>ChamAlien</Text>
          <Text style={styles.especieAlien}>Espécie: Merlini sapien</Text>
          <Image
            source={require('../assets/images/cham-alien.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>ChamAlien é um alienígena com uma aparência semelhante a de um camaleão (ou lagarto), possuindo habilidades semelhantes. Ele é capaz de se camuflar entre as cores do ambiente ficando em termos resumidos invisível. Ele possui três olhos, um na cor vermelha, outro na verde e outro azul. Seu corpo lembrando lagartos com uma forma bípede e em colorações lilases. Sua pele lembra bastante camuflagens, usadas bastante em guerras. Sua cabeça é coberta por uma cor negra e no topo de sua testa há um chifre. O Superomnitrix fica em seu peito.</Text>
          </ScrollView>
        </View>
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Contra-Tempo</Text>
          <Text style={styles.especieAlien}>Espécie: Chronosapiano</Text>
          <Image
            source={require('../assets/images/contra-tempo.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Contra-Tempo tem uma aparência de um robô. A pele de Contra-Tempo é feita de cobre, com listras pretas e um pedaço transparente de vidro verde, revelando engrenagens dentro dele. O símbolo do Superomnitrix fica em seu peito.</Text>
          </ScrollView>
        </View>
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Diabrete</Text>
          <Text style={styles.especieAlien}>Espécie: Planchaküle</Text>
          <Image
            source={require('../assets/images/diabrete.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Diabrete é um pequeno, vermelho, estranho e diabólico alienígena, que tem uma grande semelhança com um Gremlin vermelho. Ele tem o símbolo do Superomnitrix no peito. É muito pequeno, quando ele estava ao lado de Gwen ela era quase tão grande quanto a sua cabeça, excluindo a cauda. Ele também parece ser um pouco mais alto do que Massa Cinzenta mas menor do que Glutão.</Text>
          </ScrollView>
        </View>
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Besouro</Text>
          <Text style={styles.especieAlien}>Espécie: Oryctini</Text>
          <Image
            source={require('../assets/images/besouro.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Besouro é um alienígena humanoide azul púrpura e sua luz é azulada de cor escura. Ele tem um longo chifre no topo de sua cabeça ligada na parte de trás da cabeça e uma boca grande que se espalha por parte de seu peito. Tem uma grande boca azul clara, e um cinto e pulseiras dessa mesma cor, e os olhos em forma oval. O Superomnitrix fica localizado em seu peito.</Text>
          </ScrollView>
        </View>
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Shocksquatch</Text>
          <Text style={styles.especieAlien}>Espécie: Gimlinopithecus</Text>
          <Image
            source={require('../assets/images/shocksquatch-supremacia-alienigena.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Shocksquatch é um alienígena grande, gordo e musculoso com aparência de um yeti. Ele tem um corpo azul e pelo branco incluindo uma cabeça branca, sobrancelhas pontudas, rosto rosa e com formato de macaco. Ele tem parafusos cinzas metálicos na parte de trás de suas mãos e em sua mandíbula inferior. O símbolo do Superomnitrix se localiza em seu peito.</Text>
          </ScrollView>
        </View>
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Ben Supremo</Text>
          <Text style={styles.especieAlien}>Espécie: Humano evoluído</Text>
          <Image
            source={require('../assets/images/ben-supremo.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Ben Supremo é forma suprema do Ben Tennyson.Não muda muito em relação a sua forma normal, apenas contendo o símbolo do Superomnitrix evoluído em seu peito. Além disso, Ben Supremo também muda de tamanho ou musculatura conforme o alienígena que escolher.</Text>
          </ScrollView>
        </View>
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Fogo Fátuo Supremo</Text>
          <Text style={styles.especieAlien}>Espécie: Metanosiano evoluído</Text>
          <Image
            source={require('../assets/images/fogo-fatuo-supremo.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Fogo Fátuo Supremo possui um esquema de cores azul e marrom escuro. Agora seu formato lembra uma árvore humanoide petrificada, e nas costas possui três grandes esferas contendo uma solução de querosene napalm de cor azul gelatinosa como confirmado por Dwayne McDuffie que Fogo Fátuo Supremo ascende uma chama três vezes mais quentes que Fogo Fátuo. Seu rosto lembra um pouco o de Chama, porém está coberto por uma dessas esferas, seus pés são semelhantes a sua versão original, seus braços são mais grossos e possuem três pequenas esferas em cada um. O Superomnitrix se localiza em seu peito.</Text>
          </ScrollView>
        </View>
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Macaco-Aranha Supremo</Text>
          <Text style={styles.especieAlien}>Espécie: Arachnachimp evoluído</Text>
          <Image
            source={require('../assets/images/macaco-aranha-supremo.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Macaco-Aranha Supremo tem um grande corpo de gorila com a pele roxa e pelos pretos. Macaco-Aranha Supremo perdeu a cauda de Macaco-Aranha e seu par extra de braços, mas eles são substituídos com dois pares de pernas de aranha retráteis que podem dobrar em sua cintura. Macaco-Aranha Supremo usa o símbolo evoluído do Superomnitrix em seu peito.</Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Friagem Supremo</Text>
          <Text style={styles.especieAlien}>Espécie: Necrofriggiano evoluído</Text>
          <Image
            source={require('../assets/images/friagem-supremo.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Friagem Supremo é semelhante a sua forma normal, porém as partes azuis de seu corpo são vermelhas. Suas asas, máscara e antenas estão praticamente pegando fogo. O símbolo do Superomnitrix evoluído se localiza em seu peito.</Text>
          </ScrollView>
        </View>
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Enormossauro Supremo</Text>
          <Text style={styles.especieAlien}>Espécie: Vaxasauriano evoluído</Text>
          <Image
            source={require('../assets/images/enormossauro-supremo.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Enormossauro Supremo é um gigantesco alien de cor verde com forma de dinossauro, possui um capacete e uma carapaça coberta de espinhos. Há uma clava na ponta de sua cauda e no seu tórax se podem ver alguns pequenos espinhos e seus dedos possuem pequenas aglomerações semelhantes a ossos saindo de sua pele, com o qual são utilizados para transformar sua mãos em canhões. Ele tem 15 metros de comprimento. O símbolo do Superomnitrix evoluído fica localizado no meio de seu peito.</Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Bala de Canhão Supremo</Text>
          <Text style={styles.especieAlien}>Espécie: Pelarota Arburiano evoluído</Text>
          <Image
            source={require('../assets/images/bala-de-canhao-supremo.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Depois de evoluir, ele muda sua cor branca e amarela para uma cor metálica leve ciano (cor que lembra muito a cor azul). Seu escudo blindado evolui para mais uma armadura metálica com pregos tipo de cilindro que se transformam em pontas quando ele entra em sua forma de bola com espinhos, ele tem duas em cada segmento para trás e um em cada ombro, punho e placas na perna oferecendo uma defesa maior e mais capacidade ofensiva.</Text>
          </ScrollView>
        </View>
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Eco Eco Supremo</Text>
          <Text style={styles.especieAlien}>Espécie: Sonorosiano evoluído</Text>
          <Image
            source={require('../assets/images/eco-eco-supremo.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Eco Eco Supremo é azul, muito mais alto que sua forma normal, com componentes ligados ao seu corpo e braços e pernas maiores. Pelo seu corpo tem 15 discos sônicos, que podem ser removidos. Tem duas linhas pretas em cada uma de suas pernas, uma em cada braço, sendo que essa vai do ombro até a mão, uma em seu tórax e duas que se ligam aos seus olhos. O Superomnitrix evoluído se localiza em seu peito.</Text>
          </ScrollView>
        </View>
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Besta Suprema</Text>
          <Text style={styles.especieAlien}>Espécie: Vulpimancer evoluído</Text>
          <Image
            source={require('../assets/images/besta-suprema.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Besta Suprema é significativamente maior e mais musculoso do que o Besta. Sua pele é de cor marrom avermelhado. Ele tem quatro enormes picos cinzas que começam como uma barbatana de tubarão na cabeça e seguem até o final das suas costas, afinando perto da garupa. Ele também tem uma longa cauda, ​​cuja ponta tem um chifre semelhante a um ferrão de escorpião. Seus lábios são negros, como Besta na série original. A Besta Suprema usa o símbolo do Superomnitrix no peito.</Text>
          </ScrollView>
        </View>
        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Gigante Supremo</Text>
          <Text style={styles.especieAlien}>Espécie: To'kustar evoluído</Text>
          <Image
            source={require('../assets/images/gigante-supremo.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>Após sua evolução, Gigante cresce de forma incontável e ganha três chifres em sua cabeça. As partes brancas de seu corpo, com exceção do peito e braços, agora são azuis. O símbolo do Superomnitrix evoluído está localizado no meio de seu peito.</Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
