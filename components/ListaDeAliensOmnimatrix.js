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
          <Text style={styles.nomeAlien}>Shocksquatch(v2)</Text>
          <Text style={styles.especieAlien}>Espécie: Gimlinopithecus</Text>
          <Image
            source={require('../assets/images/shocksquatch-omnverse.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Em Omniverse, Shocksquatch muda completamente. Possui menos pelos
              em sua barriga, dando a impressão de estar mais magro do que no
              especial Heróis Unidos e ele agora tem a pele amarela e preta,
              juntamente com os dedos das mãos e pés cinza. Ele agora tem 4
              dedos em vez de cinco e seu antebraço está mais forte. Ele também
              possui agora dois "parafusos" do lado do punho, em vez de a parte
              de trás das suas mãos. Agora tem olhos verdes com pupilas negras.
              Ele também tem uma sobrancelhas agora amarela, pontudas, em forma
              de tridente e um cinto verde com uma listra branco, onde está o
              símbolo do Omnitrix.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Feedback</Text>
          <Text style={styles.especieAlien}>Espécie: Conductoide</Text>
          <Image
            source={require('../assets/images/feedback.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Feedback, quando usado pelo Ben presente, tem um esquema de cores
              preto e verde semelhante a camisa de Diamante. Ele é semelhante a
              sua versão mais jovem, exceto que ele tem parafusos de ouro em
              seus ombros braços e na cintura. Ele usa o símbolo do Omnitrix no
              peito.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Atômico</Text>
          <Text style={styles.especieAlien}>Espécie: Desconhecida</Text>
          <Image
            source={require('../assets/images/atomico.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Atômico tem um corpo de aspecto metálico nas cores verde e branco,
              com cápsulas de um líquido esverdeado em seus punhos, ombros e
              cérebro. Tem um símbolo grande do Omnitrix no seu peito, com o
              mesmo líquido esverdeado. Tem detalhes pontiagudos no ombros,
              semelhante a Gigante. Ele não tem boca.[DJW 1] Usa um cinto verde
              com listras brancas ao redor e uma sunga preta. O símbolo do
              Omnitrix se localiza em seu cinto.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Gravattack</Text>
          <Text style={styles.especieAlien}>Espécie: Galileano</Text>
          <Image
            source={require('../assets/images/gravattack.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Gravattack é uma forma de vida baseada em silício.Sua cabeça é
              grande e seu formato achatado lembra um pouco o de Artrópode, mas
              com uma boca grande com vários dentes feitos de rochas. Ele possui
              núcleo vermelho fundido em seu peito, seus pés são cinza com 3
              dedos e tem picos de rocha saindo por todo o corpo. Ele também usa
              uma bermuda preta com bordas verdes e um cinto verde com listras
              brancas. O símbolo do Omnitrix se localiza em sua testa.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>O Pior</Text>
          <Text style={styles.especieAlien}>Espécie: Atrociano</Text>
          <Image
            source={require('../assets/images/o-pior.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Usando uma cueca verde com detalhes brancos, O Pior é um
              alienígena pequeno, obeso, com o corpo aparentemente deformado e
              com uma pele de coloração amarela. Ele possui vários caroços
              (verrugas) em sua cabeça e braços e têm pés volumosos e redondos.
              O símbolo do Omnitrix permanece em seu desajeitado umbigo, se
              encaixando em um "caroço".
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Bloxx</Text>
          <Text style={styles.especieAlien}>Espécie: Segmentosapien</Text>
          <Image
            source={require('../assets/images/bloxx.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Bloxx possui o poder da metamorfose, como demonstrado quando ele
              se transforma em várias formas, objetos, estruturas ou recipientes
              para combater o inimigo ou salvar alguém. Uma curiosidade é que
              Bloxx não se estica e sim cria vários blocos que o faz se expandir
              e criar novas formas. Skurd usa sua habilidade de criar canhões
              com as mãos e atirar mísseis de blocos, bastante destrutiva,que
              solta pólvora e que,se pisar doi horrivelmente.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Espantóide</Text>
          <Text style={styles.especieAlien}>Espécie: Desconhecida</Text>
          <Image
            source={require('../assets/images/espantoide.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Ao abrir sua gaiola, Espantóide revela a sua face assustadora. O
              rosto dele é tão horrível e hediondo que, de acordo com Derrick J.
              Wyatt, o único ser conhecido no universo que pode ver seu rosto
              sem sofrer efeitos colaterais, incluindo medo, doença, ou mesmo
              loucura, é a Mãe Vreedle, aterrorizando até mesmo Appopleianos,
              Ectonuritas, Loboans, Transylianos, Thep Khufans, Ormerowons e
              personalidades de Sapiens Celestiais, como Bellicus e Serena. Ele
              também pode assustar suas vítimas as deixando brancas como papel,
              como mostrado com as reações de Psyphon, Zombozo e Argit. Isso foi
              visto primeiramente quando Espantóide mostrou sua cara para
              Psyphon alimentado pelo poder da Estrela Anã, que implorou que o
              alienígena o deixasse sozinho. Mesmo Zombozo, que se alimenta de
              medo, achou impossível não ficar horrorizado do rosto de
              Espantóide. Argit adoeceu ao ver a cara de Espantóide, e conseguiu
              vomitar várias coisas que tinha comido. Caso alguém tirasse uma
              foto de Espantóide, ela sairia borrada, mas mesmo assim, teria o
              poder de aterrorizar quem olhasse para ela.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Pesky Dust</Text>
          <Text style={styles.especieAlien}>Espécie: Nemuina</Text>
          <Image
            source={require('../assets/images/pesky-dust.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Pesky Dust é um alienígena pequeno com a pele azul baseada em uma
              fada. Ele tem asas de fada roxas e cabelo azul levantado para
              cima. Pesky Dust tem três dedos nas mãos e luvas Brancas, e seus
              pés tem dois dedos. Seus olhos são verdes com cílios femininos,
              marcações rosas nas bochechas e no queixo e ele usa uma roupa
              vestido com a cor verde com listras pretas. O símbolo do Omnitrix
              localiza-se em seu peito.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Astrodáctilo</Text>
          <Text style={styles.especieAlien}>Espécie: Desconhecida</Text>
          <Image
            source={require('../assets/images/astrodactilo.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Astrodáctilo se parece uma fusão entre um Pterossauro e um
              Planador. Ele tem um bico igual a uma boca. Suas asas são médias e
              se assemelham a um planador, estão ligadas a uma mochila verde em
              suas costas. Ele tem um grande bico amarelo, olhos verdes, roupa
              preta e verde nos ombros e cintura, suspensórios verdes ao redor
              dos pulsos e tornozelos, e as asas são amarelas de um tom mais
              escuro, e também são retráteis. Astrodáctilo usa o símbolo do
              Omnitrix em seu ombro esquerdo.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Bigotóide</Text>
          <Text style={styles.especieAlien}>Espécie: Desconhecida</Text>
          <Image
            source={require('../assets/images/bigotoide.jpg')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              A maior e destacável habilidade de Bigotóide é a capacidade de
              moldar e manipular seu próprio bigode para ataques físicos, tais
              como socos. Moldando-os como se fossem braços, ele pode esticá-los
              e fazê-los crescer e portanto alcançando lugares longínquos com
              eles. Ele pode usá-lo como fortes e poderosos punhos capazes de
              levantar caminhões, para voar como um helicóptero, para servir de
              paraquedas e muito mais.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Bullfrag</Text>
          <Text style={styles.especieAlien}>Espécie: Inkursiano</Text>
          <Image
            source={require('../assets/images/bullfrag.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Apesar de ser um Inkursiano comum, é musculoso e alto. A
              tonalidade de sua pele é um pouco mais clara. Ele usa óculos
              escuros no formato triangular. O Omnitrix se localiza na parte
              superior do tronco, próximo ao pescoço, o qual pode ser escondido
              com a ajuda de uma tampa, com o propósito de que se esconda em
              meio aos demais Inkursianos.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Cocorocóide</Text>
          <Text style={styles.especieAlien}>Espécie: Desconhecida</Text>
          <Image
            source={require('../assets/images/cocorocoide.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Cocorocóide apresenta atributos físicos sobre-humanos, pois possui
              uma força, agilidade, velocidade e reflexos elevados assim como
              Rath. Ele também pode usar vários estilos de luta para confundir e
              nocautear seu adversário. Ele mostrou ter bastante força para
              jogar Fistrick contra a parede com apenas um pequeno chute, e uma
              capacidade física capaz de derrotar Liam com muita facilidade, o
              que é intrigante por ele ter sido adquirido a partir de seu DNA.
              Em Colecione Isso, demonstrou ter supervelocidade deixando poeira
              enquanto corria no futebol.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Crashhopper</Text>
          <Text style={styles.especieAlien}>Espécie: Orthopterranos</Text>
          <Image
            source={require('../assets/images/crashhopper.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Crashhopper se parece muito com uma mistura entre um gafanhoto e
              um louva-a-deus com membros traseiros de três articulações
              significativamente grandes. Ele tem uma película verde ligada à
              tíbia e ao tarso das pernas. Ele tem a pele verde, que tem uma
              tonalidade semelhante a Stinkfly , um grande chifre segmentado no
              topo de sua cabeça, e dois chifres menores nas laterais de sua
              cabeça onde os olhos são colocados. Cada chifre tem três pequenos
              picos atrás deles. Há também três pontas em cada antebraço e na
              parte de trás de ambos os tarsos nas pernas. Ele tem dois dedos
              afiados, um polegar em cada mão e dois dedos em forma de garra de
              cor clara nos pés junto com um nas costas. Seu queixo é bem
              pequeno com duas linhas, ele tem estruturas semelhantes a guelras
              sob as axilas e seu pescoço segmentado se estende de um colar
              verde que se funde com o tronco.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Escarábola</Text>
          <Text style={styles.especieAlien}>Espécie: Desconhecida</Text>
          <Image
            source={require('../assets/images/escarabola.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Escarábola pode expelir de sua boca bolas de plasma verde e
              grudento que podem ser usadas de várias formas, tais como
              chutá-las contra os inimigos, cuspir diretamente contra eles e até
              mesmo subir em cima delas e jogar contra o inimigo, já que não são
              só grudentas como também são explosivas, e como foi visto em
              Predadores e Presas, Parte 1, quanto mais ele anda com esta esfera
              maior ela fica, pois vai coletando qualquer objeto em sua frente e
              ao mesmo tempo vai digerindo eles. Estas esferas podem explodir,
              causando um grande dano. Em A Raiz de Todo o Mal, ela é vista
              absorvendo os lasers de Leander e Swift, que ficam supridos na
              bola para ser explodida.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Podrão</Text>
          <Text style={styles.especieAlien}>Espécie: Desconhecida</Text>
          <Image
            source={require('../assets/images/podrao.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Podrão pode armazenar e liberar gases químicos de seu corpo,
              produzidos por suas tripas podres. Sendo compostos principalmente
              de produtos químicos gasosos em seu intestino, Podrão tem a
              capacidade de fazer combinações de quase qualquer produto químico
              em seu corpo e expulsá-los, sendo capaz de criar coisas, como
              dióxido de enxofre, óxido nitroso, fluorometil hexafluoroisopropil
              éter, um feromônio que atrai Gigantes do Mal e gás sonífero.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Vompiro</Text>
          <Text style={styles.especieAlien}>Espécie: Vladat</Text>
          <Image
            source={require('../assets/images/vompiro.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Vompiro pode controlar a mente de quem quiser ao hipnotizar ela
              com seus olhos, um poder que funciona por meio de força de
              vontade. Também pode tomar controle dos seres ao disparar
              Corrupturas em suas testas.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Walkatruta</Text>
          <Text style={styles.especieAlien}>Espécie: Ickthyperambuloid</Text>
          <Image
            source={require('../assets/images/walkatruta.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Walkatruta se assemelha a um pequeno peixe (uma truta), com seus
              dentes inferiores saltando para fora da boca, uma barbatana, duas
              finas pernas e uma cauda, além de olhos volumosos. O Omnitrix se
              encontra no meio de uma espécie de colete verde.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Fogo Fátuo Desabrochado</Text>
          <Text style={styles.especieAlien}>Espécie: Metanosiano</Text>
          <Image
            source={require('../assets/images/fogo-fatuo-desabrochado.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Chegando ao estágio final do Desabrochamento, Fogo Fátuo está mais
              forte e mais alto, com a pele agora em um verde mais claro, e com
              menos detalhes pretos espalhados. Continua com a gola no pescoço,
              que está laranja e vermelho, e seu rosto está com um queixo
              parecido com o de Crashhopper, com uma máscara parecida com a de
              Acelerado, nas cores laranja e amarela. Suas mãos são pretas,
              tendo quatro dedos amarelos. Seus olhos são completamente verdes.
              Tem seis espinhos vermelhos parecidos com chamas; dois em cada
              braço, e um em cada ombro; e um espinho verde em cada pé e joelho.
              O Omnitrix segue localizado em sua barriga.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.cardsAliens}>
          <Text style={styles.nomeAlien}>Techno-Bubbled Clockwork</Text>
          <Text style={styles.especieAlien}>
            Espécie: Chronosapiano e Mecamorfo galvânico
          </Text>
          <Image
            source={require('../assets/images/techno-bubbled-clockwork.webp')}
            style={styles.imagemsDeAliens}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.areaRolagem}>
            <Text style={styles.descricao}>
              Techno-Bubbled Clockwork é a fusão dos alienígenas Contra-Tempo,
              de Ben Tennyson, e Bolha-Técnica, de Ben 23.Ele possui o corpo de
              Contra-Tempo, porém com as cores e circuitos de Bolha-Técnica por
              todo seu ser. Seu corpo tem um pouco mais de "curvas", e a chave
              em sua cabeça é maior, sendo que nela está localizado o olho de
              Bolha-Técnica. Acima do símbolo do Omnitrix, está o símbolo do
              Relógio do Herói.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
