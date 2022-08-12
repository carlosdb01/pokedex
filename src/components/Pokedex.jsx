import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports'
import axios from 'axios';
import CharacterItem from './CharacterItem';
import { useNavigate} from 'react-router-dom'


const Pokedex = () => {

  const user = useSelector((state) => state.user);

  const [characters, setCharacters] = useState([])

  const [characterSearch, setCharacterSearch] = useState("")
  
  const[ types, setTypes] = useState([])

  const navigate = useNavigate()

 


  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1200&offset=0")
      .then(res => setCharacters(res.data.results))

      axios.get(`https://pokeapi.co/api/v2/type/`)
      .then(res=>setTypes(res.data.results))
     
  }, [])

  

  console.log(types);
 

  const search =() =>{
    
    navigate(`/pokedex/${characterSearch}`)
      
  }

  const filterTypes = e =>{
   
    axios.get( e.target.value)
    .then(res=> setCharacters(res.data.pokemon))
  }

  const [page, setPage] = useState(1)
  const lastIndex = page * 15
  const firstIndex = lastIndex - 15
  const pokemonPaginated = characters.slice(firstIndex, lastIndex)

  const lastPage =Math.ceil(characters.length / 15)

  console.log(characters)

  const numbers =[]
  for(let i = 1; i <= lastPage; i++){
    numbers.push(i)
  }


  return (
    <div>
      <header className='header-pokedex'>
no
      <h1>Pokedex</h1>
     
      </header>
      <p className='welcome-text'>Bienvenido <b className='user-color'>{user}</b> este es tu pokedex</p>
      <nav className='section-button'>
      
      <form onSubmit={search}>
        <input type="text" 
        value={characterSearch}
        onChange={e => setCharacterSearch(e.target.value)}
        />
        <button>search</button>
      </form>
      

      <select onChange={filterTypes}>
        <option value="">selecciona una ubicacion</option>
        {
        types.map(type => (
          <option value={type.url }key={type.url}>
            {type.name}
            </option>
        ))
      }
      
      </select>
      <br />
      <br />
      </nav>
      <br />
      <section className='button-section-pag'>
      <button onClick={()=>setPage (page -1)} 
      disabled={page === 1}>
        prev pag
      </button> 

      {numbers.map(number=>(
        <button onClick={()=>setPage(number)}>{number}</button>
      ))}
      <button onClick={()=>setPage (page +1)} disabled={page === lastPage}>next pag</button>
      </section>
      <br />
      
        <section className='flex-container'>
       
        {
         pokemonPaginated?.map(character => (
            <div key={character.url ? character.url : character.pokemon.url}> 
              <CharacterItem 
              characterUrl={character.url ? character.url : character.pokemon.url} />
            </div>
          ))
        }
      
      </section>
    </div>
  );
};

export default Pokedex