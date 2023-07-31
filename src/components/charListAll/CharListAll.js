import { useEffect, useState } from 'react';

import './charListAll.scss';
import Characters from '../characters/Characters';
import useCharService from '../../hooks/charService';

function CharListAll() {

  const {getCharacters} = useCharService();

  const [charItems, changeCharItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [info, setInfo] = useState({pages: 1});
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    getCharacters(1)
      .then((data) => {
        setInfo(data.info);
      });
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, []);

  useEffect(() => {
    if (fetching && currentPage <= info.pages) {
      getCharacters(currentPage)
        .then((data) => {
          changeCharItems([...charItems, ...data.results]);
          setCurrentPage(currentPage + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  }

  return (
    <Characters
      charItems={charItems}
      currentPage={currentPage}
      info={info}
    />
  );
}

export default CharListAll;