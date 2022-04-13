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

  getTypes() {
    const types = this.state.pokemons.map(pokemon => pokemon.type);
    return [...new Set(types)].sort();
  }

  filterPokemon = (filter) => {

    const filteredData = this.state.pokemons.filter(pokemon => {
      if (filter === '')
        return true
      return pokemon.type === filter
    })

    this.setState({
      filter: filter,
      myList: filteredData,
      current: 0,
    })
  }

  next() {
    this.setState((prevState) => {
      let nextIndex = prevState.current + 1
      if (prevState.myList.length - 1 === prevState.current)
        nextIndex = 0;
      return {
        current: nextIndex
      }
    })
  }
  enable() {
    return this.state.myList.length > 1
  }
  render() {
    const { myList, current } = this.state
    return (
      <div>
        <div className="pokedex">
          <Pokemon key={ myList[current].id } pokemon={ myList[current] } />
        </div>
        <div>
          <button
            className="next"
            onClick={ () => this.next() }
            disabled={ !this.enable() }>
            Próximo
          </button>
        </div>
        <br />
        <div>
          {this.getTypes().map(type =>
            (<button className={ type } key={ type } onClick={() => this.filterPokemon(type)}>{ type }</button>)
          )}
          <button onClick={ () => this.filterPokemon('') } className= "all">All</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;