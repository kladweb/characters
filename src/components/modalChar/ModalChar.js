import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './modalChar.scss';

const ModalChar = ({character, setShowMod, showMod}) => {
  const nodeRef = React.useRef(null);
  const [closeMod, setCloseMod] = useState(true);

  //closeMod и setCloseMod используем для анимации (плавного появления) модального окна;
  useEffect(() => {
    setCloseMod(false);
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
  });

  return (
    <CSSTransition
      timeout={700}
      nodeRef={nodeRef}
      classNames='land'
      in={!closeMod}
      onExited={() => {
        setShowMod(0);
      }}
      mountOnEnter
      unmountOnExit
    >
      <div ref={nodeRef} className='modal' onClick={() => {
        setCloseMod(true)
      }}>
        <div className='modal-char' onClick={e => e.stopPropagation()}>
          <span className='button-close material-icons-outlined' onClick={() => {
            setCloseMod(true)
          }}>close</span>
          <img className='modal-avatar' src={character.image} alt={character.name}/>
          <div className='descriptions'>
            {infoItems}
          </div>
        </div>
      </div>
    </CSSTransition>
  )
    ;
}

export default ModalChar;