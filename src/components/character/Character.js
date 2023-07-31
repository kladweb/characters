import React, { useState } from 'react';
import './character.scss';
import Spinner from '../spinner/Spinner';

function Character({character, setShowMod}) {
  const [showImage, setShowImage] = useState(false);

  const showImag = () => {
    setShowImage(true);
  }

  return (
    <div className='characters__item' onClick={() => {
      setShowMod(character.id);
    }}>
      <img
        style={{display: `${(showImage) ? 'block' : 'none'}`}}
        className='avatar'
        src={character.image}
        alt={character.name}
        onLoad={showImag}
      />
      {
        (!showImage) && <Spinner scale={0.4}/>
      }
      <h4>{character.name}</h4>
    </div>
  );
}

export default React.memo(Character);