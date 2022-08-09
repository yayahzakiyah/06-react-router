import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Page1 } from '../features/Page1';
import { Page2 } from '../features/Page2';
import { Navigation } from './Navigation';

export const AppRouter = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route path='page1' element={<Page1/>}/>
            <Route path='page2' element={<Page2/>}/>
          </Route>
        </Routes>
    </div>
  )
}
