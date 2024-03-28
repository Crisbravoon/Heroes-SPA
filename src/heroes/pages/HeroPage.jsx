import React from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroByID } from '../helpers';

export const HeroPage = () => {

  const { id } = useParams();
  const hero = getHeroByID(id);

  const navegate = useNavigate();

  const restNavegate = ()=>{
    navegate(-1);
  };

  if (!hero) {
    return <Navigate to='/marvel' />
  }

  return (
    <div>
      <div className='row mt-5'>
        <div className="col-4">
          <img className="img-thumbnail" src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} />
        </div>
        <div className=' mt-5 flex justify-content-center col-8'>
          <h1>{hero.superhero}</h1>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'><b>First Appearance: </b>{hero.first_appearance}</li>
            <li className='list-group-item'><b>Alter Ego: </b>{hero.alter_ego}</li>
            <li className='list-group-item'><b>Characters: </b>{hero.characters}</li>
          </ul>
          <button
            className='mx-3 mt-4 btn btn-primary'
            onClick={restNavegate}> Regresar
          </button>
        </div>
      </div>
    </div>
  )
};
