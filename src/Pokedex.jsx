import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemons: props.pokemons,
      current: 0,
      myList: props.pokemons,
      filter: '',
    }
  }

  filterPokemon = (filter) => {
    this.setState({
      filter: filter,
      myList: this.state.pokemons.filter( pokemon => {
        if( filter === '' ) 
          return true
          return pokemon.type = filter
      })
    })
  }

  next() {
    this.setState((prevState) => ({
      current: prevState.current + 1
    }))
  }
    render() {
      const { myList, current } = this.state
        return (
            <div>
              <div>
                <button onClick={ () => this.filterPokemon('') }>All</button>
                <button onClick={ () => this.filterPokemon('Fire') }>Fire</button>
                <button onClick={ () => this.filterPokemon('Psychic') }>Psychic</button>
              </div>
              <div className="pokedex">
                  <Pokemon key={myList[current].id} pokemon={myList[current]} />
              </div>
              <div>
                <button onClick={ () => this.next() }>
                  Próximo
                </button>
              </div>
            </div>
        );
    }
}

export default Pokedex;