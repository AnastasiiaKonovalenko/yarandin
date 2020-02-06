import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';

const Home = ({ films }) => {
  const [visibleQuery, setVisibleQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSetQuery = debounce(setSearchQuery, 1000);
  const location = useLocation();
  const history = useHistory();

  const handleChangeQuery = (evt) => {
    debouncedSetQuery(evt.target.value);
    setVisibleQuery(evt.target.value);
  };

  const filmsAfterQuery = !searchQuery
    ? films
    : films.filter((item) => item.title.toLowerCase()
      .includes(searchQuery.toLowerCase()));


  const searchParams = new URLSearchParams(location.search);

  let sortedFilms = '';

  const sortParam = searchParams.get('sort');

  if (sortParam) {
    sortedFilms = (typeof films[0][sortParam] === 'number'
            || typeof films[0][sortParam] === 'boolean')
      ? [...filmsAfterQuery]
        .sort((a, b) => (a[sortParam] - b[sortParam])
                    * (searchParams.get('orderOfSorting') === 'asc' ? 1 : -1))
      : [...filmsAfterQuery]
        .sort((a, b) => (a[sortParam].localeCompare(b[sortParam]))
                    * (searchParams.get('orderOfSorting') === 'asc' ? 1 : -1));
  } else {
    sortedFilms = filmsAfterQuery;
  }

  const sortFilms = (param) => {
    searchParams.set('sort', param);

    if (searchParams.get('sort') === param
            && searchParams.get('orderOfSorting') === 'asc') {
      searchParams.set('orderOfSorting', 'desc');
    } else {
      searchParams.set('orderOfSorting', 'asc');
    }

    history.push({ search: searchParams.toString() });
  };

  return (
    <main className="main">
      <div className="stars" />
      <div className="clouds" />
      <h1 className="main__heading">
        Star wars universe
      </h1>
      <div className="main__search">
        <input
          type="text"
          placeholder="Search..."
          value={visibleQuery}
          onChange={handleChangeQuery}
        />

        <button
          className="button"
          type="button"
          onClick={() => sortFilms('title')}
        >
          Sort
        </button>
      </div>
      <section className="films">
        {sortedFilms.map((film) => (
          <Link
            to={`/${film.episode_id}`}
            className="films__link"
            key={film.title}
          >
            <article
              className="films__article"
            >
              <h2
                className="films__heading"
              >
                {film.title}
              </h2>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
};

Home.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Home;
