import { useEffect, useState } from 'react';

import './charactersList.scss';
import Character from '../character/Character';
import { useHttp } from '../../hooks/http.hook';

function CharactersList() {
  const {loading, request, error, clearError} = useHttp();
  const _apiBase = 'https://rickandmortyapi.com/api/character/?page=1';

  const [charItems, changeCharItems] = useState([]);

  const getCharacters = async () => {
    const data = await request(_apiBase, 'GET');
    return data.results;
  }

  useEffect(() => {
    getCharacters()
      .then((data) => {
        changeCharItems(data);
        console.log(data);
      })
  }, []);

  const characters = charItems.map(character =>
    <Character
      key={character.id}
      name={character.name}
      image={character.image}
    />
  )

  return (
    <div className='content characters'>
      {characters}
    </div>
  )
}

export default CharactersList;