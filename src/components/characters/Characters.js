import { useState } from 'react';

import { useHttp } from '../../hooks/http.hook';
import Spinner from '../spinner/Spinner';
import ScrollUp from '../ScrollUp/ScrollUp';
import NavBar from '../navBar/NavBar';
import Character from '../character/Character';
import ModalChar from '../modalChar/ModalChar';

function Characters({charItems, currentPage, info}) {

  const {loading} = useHttp();

  //0 - не показываем модальное окно, n - показываем модальное окно персонажа с ID = n;
  const [showMod, setShowMod] = useState(0);

  const characters = charItems.map(character =>
    <Character
      key={character.id}
      character={character}
      setShowMod={setShowMod}
    />
  );

  const getCharacter = () => {
    let currentChar = {};
    charItems.forEach((el) => {
      if (el.id === showMod) {
        currentChar = el;
      }
    });
    return currentChar;
  }

  return (
    <>
      <ScrollUp/>
      <NavBar
        numPageCurrent={currentPage}
        pages={info.pages}
      />
      <div className='content characters'>
        {
          (!!showMod) && <ModalChar character={getCharacter()} setShowMod={setShowMod}/>
        }
        {characters}
        {
          (loading) && <Spinner scale={1}/>
        }
      </div>
    </>
  );
}

export default Characters