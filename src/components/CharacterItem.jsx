import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const CharacterItem = ({ characterUrl }) => {

  const [character, setCharacter] = useState({})

  const [types, setTypes] = useState({}) 

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(characterUrl)
      .then(res => setCharacter(res.data))

      
  }, [])



  return (

    <div className='card' onClick={() => navigate(`/pokedex/${character.id}`)} >
      <header className='header-details-principal-card'>
        <img className='pokemons' src={character.sprites?.other['official-artwork']['front_default']} alt="" />
        <br />
        <h3>{character.name}</h3>
        
        <p className='type-pokemon'>
        {character.types?.[0].type.name}
                  {character.types?.[1] && ' / ' + character?.types?.[1].type.name }
        </p>

        {character.stats?.map(stats => (
          <p key={stats.stat.name}>{stats.stat.name } </p>
        ))}

      </header>

    </div>
  );
};

export default CharacterItem;