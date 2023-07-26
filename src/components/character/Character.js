import './character.scss';

function Character() {
  return (
    <div className='characters__item'>
      <img className='avatar' src="https://rickandmortyapi.com/api/character/avatar/361.jpeg" alt="КАРТОЧКА"/>
      <h4>КАРТОЧКА</h4>
    </div>
  );
}

export default Character;