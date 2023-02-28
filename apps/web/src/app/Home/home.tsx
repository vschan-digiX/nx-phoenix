import { useEffect } from 'react';
import styles from './home.module.css';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from '@phoenix/services'
import { getPokemonState , fetchPokemon, selectAllPokemon } from '@phoenix/store'

import {
  mapDispatchToProps,
  mapStateToProps,
  PokemonProps
} from './home.props';
/* eslint-disable-next-line */

export default function Home(props:any) {

  const pokemon = useSelector(selectAllPokemon)
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchPokemon())
  }, [])
  
  return (
    <div className={styles['container']} style={{display:"flex", alignItems:'center' , flexWrap:"wrap"}} >
      {pokemon?.map( poke =>   {
        return (
          <div style={{margin:10}} >
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} alt={poke.name} className="w-100" />
            <div>{poke.name}</div> 
          </div>
        )
      })}
    </div>
  );
}


