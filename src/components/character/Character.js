import './character.scss';

function Character({name, image}) {
  return (
    <div className='characters__item'>
      <img className='avatar' src={image} alt={name}/>
      <h4>{name}</h4>
    </div>
  );
}

export default Character;