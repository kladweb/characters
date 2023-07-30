import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CharListAll from '../components/charListAll/CharListAll';
import CharList from '../components/charList/CharList';

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<CharListAll/>}/>
      <Route path='/pages' element={<CharList/>}>
        <Route path=':part' element={<CharList/>}/>
      </Route>
    </Routes>
  );
}