import { NavLink, useNavigate } from 'react-router-dom';

import './navBar.scss';
import React from 'react';

const NavBar = ({pagePrev, numPageCurrent, pageNext, pages}) => {
  // const numPageNext = parseFloat(pageNext.split('page=')[1]);
  // const numPagePrev = parseFloat(pagePrev.split('page=')[1]);
  const navigate = useNavigate();
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
      <NavLink to={`/`} key={0} className='navPages-links navPages-links-first'>
        <span className='navPages-items'>ALL</span>
      </NavLink>
    );

    if (numPageCurrent > 1) {
      pagPages.push(
        <button key={1} className='navPages-links' onClick={goFirst}>
          <span className='material-icons-outlined navPages-symbol'>keyboard_double_arrow_left</span>
        </button>
      );
      pagPages.push(
        <button key={2} className='navPages-links' onClick={goBefore}>
          <span className='material-icons-outlined navPages-symbol'>navigate_before</span>
        </button>
      );
      pagPages.push(<span key={3} className='navPages-items navPages-name'>...</span>);
    }

    pagPages.push(
      <NavLink to={`/pages/${numPageCurrent}`} key={4} className='navPages-links'>
        <span className='navPages-items'>{numPageCurrent}</span>
      </NavLink>
    );

    if (numPageCurrent < pages) {
      pagPages.push(<span key={5} className='navPages-items navPages-name'>...</span>);
      pagPages.push(
        <button key={6} className='navPages-links' onClick={goNext}>
          <span className='material-icons-outlined navPages-symbol'>navigate_next</span>
        </button>
      );
      pagPages.push(
        <button key={7} className='navPages-links' onClick={goLast}>
          <span className='material-icons-outlined navPages-symbol'>keyboard_double_arrow_right</span>
        </button>
      );
    }
    return pagPages;
  }

  return (
    <div className='content navPages'>
      {getPrevLink()}
    </div>
  )
}

export default React.memo(NavBar);