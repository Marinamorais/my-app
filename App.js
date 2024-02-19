
import React from 'react';
import {Text, Image, FlatList,View} from 'react-native';

const projetos = [
    { id: '1', nome: 'API brasileirao 2023', descriçao: 'API que para quem é apaixonado por futebol', tecnologias: 'Node.js e React'},
    { id: '2', nome: 'KamiNews', descriçao: 'Blog de noticia', tecnologias: 'Html, CSS'},
    { id: '3', nome: 'MarvelApi', descriçao: 'Api para buscar informações sobre os personagens da Marvel', tecnologias: 'React e Node.js'}, 
];

export default function App() {

  const renderItem = ({ item }) => (
    
    <View className={'mt-3 relative h-48 w-48 overflow-hidden rounded-xl border p-[1px] backdrop-blur-3xl flex justify-center '}>
      <Text className={'font-bold text-purple-800 mt-3 '}>Nome:</Text>
      <Text>{item.nome}</Text>
      <View>
      <Text className={'font-bold text-purple-800 mt-1 '}>Descrição: </Text>
      <Text>{item.descriçao}</Text>
      </View>
      
      <Text className={'font-bold text-purple-800 mt-1 '}>Tecnologias: </Text>
      <Text>{item.tecnologias}</Text>
    <View>
    </View>
    </View>

  );

  return (
    <View className={'items-center bg-stone-200'}>
    <View>
      <View className={'flex justify-center items-center'}>
        <Image
          source={require('./assets/foto2.jpeg')}
          style={{ width: 80, height: 80, borderRadius: 150 / 2 }}
        />
      </View>
      <View>
        <Text className={'text-center font-bold text-xl mt-1'}>Marina Elis 💫</Text>
      </View>
      <View className={'mt-1'}>
        <Text className={'text-center'}>Desenvolvimento de sistemas</Text>
        <Text className={'text-center'}>3° semestre</Text>
      </View>
      <View className={'mt-3'}>
        <Text>Olá seja Bemvido(a)!Neste Portifoli mostrarei um pouco dos meus Projetos e as tecnologias utilizadas🌟</Text>
      </View>
      <View className={'mt-1'}>
        <Text className={'items-center text-center'}>Projetos</Text>
        <FlatList
          data={projetos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
    </View>
  );
}