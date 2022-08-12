import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'

const CharacterDetail = () => {

    const [character, setCharacter] = useState({});

    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setCharacter(res.data))
        }, [id])
    
   

    return (
        <header className='header-details'>
        
         
        <h1>{character?.name}</h1>
        <img src={character.sprites?.other['official-artwork']['front_default']} alt="" />
        
        
        </header>
    );
};

export default CharacterDetail;
