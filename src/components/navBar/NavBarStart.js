import { NavLink } from 'react-router-dom';

import React from 'react';
import './navBar.scss'

const NavBarStart = ({pagePrev, numPageCurrent, pageNext, pages}) => {
  // const numPagePrev = parseFloat(pagePrev.split('page=')[1]);
  // const numPageNext = parseFloat(pageNext.split('page=')[1]);

  const getPrevLink = () => {
    let pagPages = []

    pagPages.push(
      <NavLink to={`/`} key={0} className='navPages-links navPages-links-first'>
        <span className='navPages-items'>ALL</span>
      </NavLink>
    );

    pagPages.push(
      <NavLink to={`/pages/1`} key={8} className='navPages-links'>
        <span className='navPages-items navPages-name'>PAGES</span>
      </NavLink>
    );

    return pagPages;
  }

  return (
    <div className='content navPages'>
      {getPrevLink()}
    </div>
  )
}

export default React.memo(NavBarStart);