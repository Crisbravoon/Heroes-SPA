import React from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroByID } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {

  const { id } = useParams();
  
  /**
   * Se utiliza useMemo para que cada vez las dependencias cambien , en
   * este caso será el id el cual cambia  
   */
  const hero = useMemo(() => getHeroByID(id), [id]);

  const navegate = useNavigate();

  const onNavegateBack = () => {
    navegate(-1);
  };

  if (!hero) {
    return <Navigate to='/marvel' />
  };

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
            onClick={onNavegateBack}>
            Regresar
          </button>
        </div>
      </div>
    </div>
  )
};
