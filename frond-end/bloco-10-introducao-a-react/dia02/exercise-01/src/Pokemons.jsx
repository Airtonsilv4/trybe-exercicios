import React from 'react'
import data from './data'
import './Pokemons.css'

class Pokemons extends React.Component {
  render() {
    return (
      data.map((poke) => {
        return (
          <section className='container' key={poke.name}>
            <div className='description'>
              <p>{poke.name}</p>
              <p>{poke.type}</p>
              <p>Average Weight: {Object.values(poke.averageWeight).join(' ')}</p>
            </div>
            <img src={poke.image} alt="" />
          </section>)
      })
    )
  }
}

export default Pokemons;