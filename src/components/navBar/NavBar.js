import React from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import './navBar.scss';

const NavBar = ({numPageCurrent, pages}) => {
  const navigate = useNavigate();
  const params = useParams();

  const goFirst = () => {
    navigate('/pages/1');
  }

  const goBefore = () => {
    navigate(`/pages/${parseFloat(numPageCurrent) - 1}`);
  }

  const goLast = () => {
    navigate(`/pages/${pages}`);
  }
  const goNext = () => {
    navigate(`/pages/${parseFloat(numPageCurrent) + 1}`);
  }
  const getPrevLink = () => {
    let pagPages = []

    pagPages.push(
      <NavLink to={`/`} key={0} className='navPages-links navPages-links-first' disabled={true}>
        <span className='navPages-items navPages-name'>ALL</span>
      </NavLink>
    );

    if (!(params.part)) {
      pagPages.push(
        <NavLink to={`/pages/1`} key={8} className='navPages-links'>
          <span className='navPages-items navPages-name'>PAGES</span>
        </NavLink>
      );
      return pagPages;
    }

    pagPages.push(
      <button key={1} className='navPages-links' onClick={goFirst} disabled={!(numPageCurrent > 1)}>
        <span className='material-icons-outlined navPages-symbol'>keyboard_double_arrow_left</span>
      </button>
    );
    pagPages.push(
      <button key={2} className='navPages-links' onClick={goBefore} disabled={!(numPageCurrent > 1)}>
        <span className='material-icons-outlined navPages-symbol'>navigate_before</span>
      </button>
    );
    pagPages.push(<span key={3} className='navPages-items navPages-dots'>...</span>);

    pagPages.push(
      <NavLink to={`/pages/${numPageCurrent}`} key={4} className='navPages-links'>
        <span className='navPages-items navPages-name'>{numPageCurrent}</span>
      </NavLink>
    );
    pagPages.push(<span key={5} className='navPages-items navPages-dots'>...</span>);
    pagPages.push(
      <button key={6} className='navPages-links' onClick={goNext} disabled={!(numPageCurrent < pages)}>
        <span className='material-icons-outlined navPages-symbol'>navigate_next</span>
      </button>
    );
    pagPages.push(
      <button key={7} className='navPages-links' onClick={goLast} disabled={!(numPageCurrent < pages)}>
        <span className='material-icons-outlined navPages-symbol'>keyboard_double_arrow_right</span>
      </button>
    );
    return pagPages;
  }

  return (
    <div className='content navPages'>
      {getPrevLink()}
    </div>
  )
}

export default React.memo(NavBar);