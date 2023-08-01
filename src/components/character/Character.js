import React, { useState } from 'react';
import Spinner from '../spinner/Spinner';
import './character.scss';

function Character({character, setShowMod}) {
  const [showImage, setShowImage] = useState(false);
  const [showError, setShowError] = useState(false);

  const showImag = () => {
    setShowImage(true);
  }

  const onError = () => {
    setShowError(true);
  }

  return (
    <div className='characters__item' onClick={() => {
      setShowMod(character.id);
    }}>
      <img
        rel='preload'
        style={{display: `${(showImage && !showError) ? 'block' : 'none'}`}}
        className='avatar'
        src={character.image}
        alt={character.name}
        onLoad={showImag}
        onError={onError}
      />
      {
        (!showImage && !showError) && <Spinner scale={0.3}/>
      }
      {
        (showError) && <img className='img-error' src='/img/error/error_2.png' alt='ERROR'/>
      }
      <h4>{character.name}</h4>
    </div>
  );
}

export default React.memo(Character);