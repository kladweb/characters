import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Characters from '../characters/Characters';
import useCharService from '../../hooks/charService';

function CharListSmall() {

  const {getCharacters} = useCharService();

  const params = useParams();
  const navigate = useNavigate();
  const page = params.part;

  const [charItems, changeCharItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [info, setInfo] = useState({pages: 1});

  useEffect(() => {
    if (!isNaN(Number(page))) {
      setCurrentPage(parseFloat(page));
    } else {
      setCurrentPage(1);
      navigate('/pages/1');
    }
  }, [page]);

  useEffect(() => {
    getCharacters(1)
      .then((data) => {
        setInfo(data.info);
        if (currentPage <= data.info.pages && currentPage >= 1) {
          getCharacters(currentPage)
            .then((data2) => {
              changeCharItems([...data2.results]);
            });
        } else {
          navigate('/pages/1');
          setCurrentPage(1);
        }
      });
  }, [currentPage]);

  return (
    <Characters
      charItems={charItems}
      currentPage={currentPage}
      info={info}
    />
  );
}

export default CharListSmall;