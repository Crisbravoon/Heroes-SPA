
import { useLocation, useNavigate } from 'react-router-dom';

import { getHeroesByName } from '../helpers';
import { useForm } from '../hooks/useForm';
import { HeroCard } from '../components';
import queryString from 'query-string';

export const SearchPage = () => {

  const navegate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  //Le pasamos el query que busca a la función
  const heroes = getHeroesByName(q);


  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (searchText.trim().length <= 1) return;

    navegate(`?q=${searchText}`);

  };

  return (
    <>
      <h1 className='mt-3'>Search</h1>
      <hr />
      <div className='row'>
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              className="form-control"
              placeholder='Search a Hero'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button
              className=" mt-3 btn btn-primary"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
           ( q === '')
              ? <div className='alert alert-primary'>Search a Hero</div>
              : (heroes.length === 0)
                 && <div className='alert alert-danger'>No hero with <b>{q}</b></div>
          }
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>
    </>
  )
};
