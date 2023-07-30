import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Character from '../character/Character';
import { useHttp } from '../../hooks/http.hook';
import Spinner from '../spinner/Spinner';
import ScrollUp from '../ScrollUp/ScrollUp';
import NavBar from '../navBar/NavBar';

function CharList() {
  const {loading, request, error, clearError} = useHttp();
  const _apiBase = 'https://rickandmortyapi.com/api/character/?page=';
  const params = useParams();
  const navigate = useNavigate();
  const page = params.part;

  const [charItems, changeCharItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [info, setInfo] = useState({pages: 1});

  useEffect(() => {
    if (page) {
      setCurrentPage(page);
    } else {
      setCurrentPage(1);
      navigate('/pages/1');
    }
    request(_apiBase + 1, 'GET')
      .then((data) => {
        setInfo(data.info);
      });
  }, [page]);

  useEffect(() => {
    request(_apiBase + currentPage, 'GET')
      .then((data) => {
        changeCharItems([...data.results]);
      });
  }, [currentPage]);


  const characters = charItems.map(character =>
    <Character
      key={character.id}
      name={character.name}
      image={character.image}
    />
  );

  return (
    <>
      <ScrollUp/>
      <NavBar
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

export default CharList;