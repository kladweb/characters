import { useEffect, useState } from 'react';

import './charListAll.scss';
import Character from '../character/Character';
import { useHttp } from '../../hooks/http.hook';
import Spinner from '../spinner/Spinner';
import ScrollUp from '../ScrollUp/ScrollUp';
import NavBarStart from '../navBar/NavBarStart';

function CharListAll() {

  const {loading, request, error, clearError} = useHttp();
  const _apiBase = 'https://rickandmortyapi.com/api/character/?page=';

  const [charItems, changeCharItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [info, setInfo] = useState({pages: 1});

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, []);

  useEffect(() => {
    if (fetching && currentPage < info.pages) {
      request(_apiBase + (currentPage + 1), 'GET')
        .then((data) => {
          setInfo(data.info);
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
    <>
      <ScrollUp/>
      <NavBarStart
        pagePrev={info.prev}
        numPageCurrent={currentPage}
        pageNext={info.next}
        pages={info.pages}
      />
      <div className='content characters'>
        {characters}
        {
          (loading) &&
          <Spinner scale={1}/>
        }
      </div>
    </>
  );
}

export default CharListAll;