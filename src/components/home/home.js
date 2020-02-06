import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce';

const Home = ({ films }) => {
  const [visibleQuery, setVisibleQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSetQuery = debounce(setSearchQuery, 1000);

  const handleChangeQuery = (evt) => {
    debouncedSetQuery(evt.target.value);
    setVisibleQuery(evt.target.value);
  };

  const filmsAfterQuery = !searchQuery
    ? films
    : films.filter((item) => item.title.toLowerCase()
      .includes(searchQuery.toLowerCase()));

  const sortedFilms = [...filmsAfterQuery];

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
          onClick={() => sortedFilms.sort((a, b) => a.title.localeCompare(b.title))}
        >
          Sort
        </button>
      </div>
      <section className="films">
        {sortedFilms.map((film) => (
          <Link
            to={`/${film.episode_id}`}
            className="films__link"
            key={film.episode_id}
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
