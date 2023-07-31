import React, { useEffect } from 'react';

import './modalChar.scss';

const ModalChar = ({character, setShowMod}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    }
  }, []);

  const descriptions = ['name', 'origin.name', 'status', 'location.name', 'species', 'gender'];
  const infoItems = descriptions.map((item, index) => {
    const items = item.split('.');
    return (
      <div key={index} className='description'>
        <h4>{items[0] + ':'}</h4>
        <p>{(items.length === 2) ? character[items[0]][items[1]] : character[item]}</p>
      </div>
    );
  })

  return (
    <div className='modal' onClick={() => setShowMod(0)}>
      <div className='modal-char' onClick={e => e.stopPropagation()}>
        <span className='button-close material-icons-outlined' onClick={() => setShowMod(0)}>close</span>
        <img className='modal-avatar' src={character.image} alt={character.name}/>
        <div className='descriptions'>
          {infoItems}
        </div>
      </div>
    </div>
  );
}

export default ModalChar;