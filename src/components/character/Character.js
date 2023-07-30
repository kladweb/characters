import React, { useState } from 'react';
import './character.scss';
import Spinner from '../spinner/Spinner';

function Character({name, image}) {
  const [showImage, setShowImage] = useState(false);
  const showImag = () => {
    setShowImage(true);
  }

  return (
    <div className='characters__item'>
      <img
        style={{display: `${(showImage) ? 'block' : 'none'}`}}
        className='avatar'
        src={image}
        alt={name}
        onLoad={showImag}
      />
      {
        (!showImage) && <Spinner scale={0.4}/>
      }
      <h4>{name}</h4>
    </div>
  );
}

export default React.memo(Character);