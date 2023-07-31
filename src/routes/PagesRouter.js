import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import CharListAll from '../components/charListAll/CharListAll';
import CharListSmall from '../components/charListSmall/CharListSmall';

export const PagesRouter = () => {

  return (
    <Routes>
      <Route path='/' element={<CharListAll/>}/>
      <Route path='/pages' element={<CharListSmall/>}>
        <Route path=':part' element={<CharListSmall/>}/>
      </Route>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  );
}