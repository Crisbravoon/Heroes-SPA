
import React from 'react';
import { HeroList } from '../components/HeroList';

export const MarvelPage = () => {
  return (
    <>
      <h1 className=' container mt-3 '>MarvelPage</h1>
      <hr />

      <ul>
        <HeroList publisher='Marvel Comics' />
      </ul>
    </>
  )
};
