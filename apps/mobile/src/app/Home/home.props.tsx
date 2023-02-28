import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import {
  fetchPokemon,
  RootState,
} from '@phoenix/store';

const mapStateToProps = (state: RootState) => {
  return {

  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, void, AnyAction>
) => {
  return {
    fetchPokemon() {
      dispatch(fetchPokemon());
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type PokemonProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps };
export type { PokemonProps };
