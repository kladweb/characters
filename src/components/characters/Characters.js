import { useState } from 'react';

import Spinner from '../spinner/Spinner';
import ScrollUp from '../ScrollUp/ScrollUp';
import NavBar from '../navBar/NavBar';
import Character from '../character/Character';
import ModalChar from '../modalChar/ModalChar';
import './characters.scss';

function Characters({charItems, currentPage, info, loading, error}) {

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
        loading={loading}
      />
      <div className='content characters'>
        {
          (!!showMod) && <ModalChar character={getCharacter()} setShowMod={setShowMod} showMod={showMod}/>
        }
        {characters}
        {
          (!!error) && <img className='image-error' src='/img/error/error_2.png' alt='ERROR'/>
        }
        {
          (loading) && <Spinner scale={1}/>
        }
      </div>
      <img className='preload' src='/img/error/error_2.png' alt='ERROR'/>
    </>
  );
}

export default Characters