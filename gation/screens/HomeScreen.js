import React, { Component } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import axios from 'axios';

export default function HomeScreen (){
    const url = 'https://fnaf-web-git-main-davidlpc1.vercel.app/api/v1/all';
    const [card, setCard] = useState([]);


  const metodoGET = () => {
    axios.get(url)
  .then(response => {
    setCard(response.data);
  })
  .catch((erro)=> {
    console.log(erro);
  });
  };
    


  const metodoPOST = () => {
    axios.post(url, {
        name: nome,
        game: jogo,
        image: imagem,

    })
    .then((resposta)=>{
        console.log(resposta.data);
        metodoGET();
    })
    .catch((erros)=>{
        console.log(erros);
    })
  }


    const metodoPUT = () => {
        axios.put(`${url}/${card.id}`, data)
        .then((resposta) => card.map((item) => {
            if (item.id) === usuario.id){
                return{
                    ...item,
                    name: data.name,
                    game: data.game
                };
            }
        }))
    }

  
    return (
      <View>
        <FlatList
        data={card}
        keyExtractor={(card) => String(item.id)}
        />
      </View>
    )
  }

