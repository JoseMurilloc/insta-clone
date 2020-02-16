import React from 'react';
import { TouchableOpacity, 
  Image, 
  Text, 
  StyleSheet, 
  View, 
  FlatList, 
  SafeAreaView
} from 'react-native';

import options from '../../../assets/options.png'
import like from '../../../assets/like.png'
import comment from '../../../assets/comment.png'
import send from '../../../assets/send.png'
import save from '../../../assets/save.png'

export default function Feed() {
  
  const posts = [
    {
      id: '1',
      author: 'levir.dev',
      picture_url: 'https://s2.glbimg.com/8ImJIIHxnM2n0BxlLJMJcBbNwyk=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/e/f/kYq91eQwCMPGKwV1zABA/1917-george-mckay.jpg',
      likes: '1917',
      description: 'Saiu o filme que contara uma história que se passa na primeira guerra mundial',
      hastags: '#cinema #1917film',
      place: 'Filme indicado ao oscar'
    },
    {
      id: '2',
      author: 'levir.dev',
      picture_url: 'https://metagalaxia.com.br/wp-content/uploads/2019/10/Coringa-Joker-2019-Resenha-Poster.jpg',
      likes: '2019',
      description: 'Saiu o filme que e muito aguardo por todos um filme que contara como o joker surgio',
      hastags: '#cinema #joker',
      place: 'Filme indicado ao oscar'
    },
    {
      id: '3',
      author: 'levir.dev',
      picture_url: 'https://preview.redd.it/tqtr5lcgqsg41.jpg?width=640&crop=smart&auto=webp&s=63f11ec13adc2b758cbf5080fee085f8978e21e2',
      likes: '3011',
      description: 'Filme que entrara nas camadas sociais e mostrara o lado escruto do ser humano',
      hastags: '#cinema #parasite',
      place: 'Filme indicado ao oscar'
    },
    {
      id: '4',
      author: 'levir.dev',
      picture_url: 'https://observatoriodocinema.bol.uol.com.br/wp-content/uploads/2019/09/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.0.jpg',
      likes: '2900',
      description: 'Ultimo Filme da saga dos Vingadores',
      hastags: '#cinema #ultimato',
      place: 'Filme indicado ao oscar'
    }
  ]
  

  /**
   * Função responsavel por renderizar nossos itens
   * KeyExtractor é responsavel por ser key de cada item da lista
   * data São os dados propriamente dito da lista
   * 
   * 
   * Item e cada item da lista de posts póssivel ser acessado por esta
   * como nosso data={} no FlatList
   */
  function rendeerItens({ item: post }) {
    return (
      <View>
        {/* View das informações dos usuários (Header) */}
        <View style={styles.postHeader}>
         
          {/* Lado esquerdo */}
          <View style={styles.userInfo}>
          <Image 
            style={styles.profile}
            source={{ uri: 'https://avatars0.githubusercontent.com/u/40604081?s=460&v=4' }} 
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>
          </View>

          {/* Lado direito */}
          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>
        </View>

          {/* Imagem do post */}
          <View>
            <Image 
              style={styles.picture_url}
              source={{ uri: post.picture_url }} 
            />
          </View>

          {/* Ações do post */}
          <View style={styles.footer}>
            <View style={styles.actions}>
              {/* View da esquerda */}
              <View style={styles.leftActions}> 
                <TouchableOpacity style={styles.action}>
                  <Image source={like} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                  <Image source={comment} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                  <Image source={send} />
              </TouchableOpacity>
              </View>

              {/* View da direita */}
              <View>
                <TouchableOpacity style={styles.action}>
                  <Image source={save} />
                </TouchableOpacity>
              </View>
          </View>

          <View>
              <Text style={styles.likes}>{post.likes} likes</Text>
              <Text style={styles.description}>{post.description}</Text> 
              <Text style={styles.hastags}>{post.hastags}</Text> 
          </View>
          </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id }
        renderItem={rendeerItens}
      >

      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profile: { 
    height: 40, 
    width: 40, 
    borderRadius: 50
  },
  postHeader: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  postOptions: {},
  userInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  place: {
    fontSize: 12,
    color: '#666',
  },
  author: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  picture_url: {
    width: '100%',
    height: 400
  },
  leftActions: {
    flexDirection: 'row'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  action: {
    marginRight: 8
  },
  footer: {
    paddingHorizontal: 15,
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  hastags: {
    color: '#002d5e'
  },
  description: {
    color: '#000',
    lineHeight: 18,
  }
});

