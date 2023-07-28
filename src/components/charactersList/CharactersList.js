import { useEffect, useState } from 'react';

import './charactersList.scss';
import Character from '../character/Character';
import { useHttp } from '../../hooks/http.hook';

function CharactersList() {

  const {loading, request, error, clearError} = useHttp();
  const _apiBase = 'https://rickandmortyapi.com/api/character/?page=';

  const [charItems, changeCharItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, []);

  useEffect(() => {
    if (fetching && currentPage <= totalPages) {
      request(_apiBase + currentPage, 'GET')
        .then((data) => {
          setTotalPages(data.info.pages);
          changeCharItems([...charItems, ...data.results]);
          setCurrentPage(currentPage + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  const characters = charItems.map(character =>
    <Character
      key={character.id}
      name={character.name}
      image={character.image}
    />
  );

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  }

  return (
    <div className='content characters'>
      {characters}
    </div>
  );
}

export default CharactersList;