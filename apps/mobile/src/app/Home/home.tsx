import { useEffect } from 'react';
import { useDispatch, useSelector } from '@phoenix/services'
import { fetchPokemon, selectAllPokemon } from '@phoenix/store'
import { View , Image, Text, ScrollView} from 'react-native';
/* eslint-disable-next-line */

export default function Home(props:any) {

  const pokemon = useSelector(selectAllPokemon)
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchPokemon())
  }, [])
  
  useEffect(() => {
    console.log(pokemon)
}, [pokemon])

  return (
      <ScrollView >
        <View style={{flex: 1,flexWrap: 'wrap', flexDirection: 'row'}} >
        {pokemon?.map( poke =>   {
          return (
            <View style={{flexBasis:"50%", alignItems:"center"}} >
              <Image resizeMode='contain' style={{width: "100%", height: 100}} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}} alt={poke.name} />
              <Text>{poke.name}</Text> 
            </View>
          )
        })}
            </View>

      </ScrollView>
  );
}


