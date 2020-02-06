import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


const Episode = ({ id, films }) => {
  const film = JSON.parse(films).find((item) => item.episode_id === +id);

  const [persons, setPersons] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);

  const urlsCharacters = film.characters;
  const urlsPlanets = film.planets;
  const urlsStarships = film.starships;

  async function fetchData(arr, setFunc) {
    const results = await Promise.all(arr
      .map((url) => fetch(url).then((r) => r.json())));
    const res = JSON.stringify(results, null, 2);
    setFunc(JSON.parse(res));
  }

  useEffect(() => {
    fetchData(urlsCharacters, setPersons);
    fetchData(urlsPlanets, setPlanets);
    fetchData(urlsStarships, setStarships);
  }, []);

  return (
    <section className="episode">
      {persons.length !== 0 && planets.length !== 0 && starships.length !== 0 ? (
        <section className="film">
          <h1 className="film__heading">{film.title}</h1>
          <article className="film__prev">
            <p className="film__text">
              {film.opening_crawl}
            </p>
          </article>

          <p className="film__paragraph">
            <span>
              Director:
            </span>
            {` ${film.director}`}
          </p>

          <p className="film__paragraph">
            <span>
              Producer:
            </span>
            {` ${film.producer}`}
          </p>

          <p className="film__paragraph">
            <span>Release date:</span>
            {` ${film.release_date}`}
          </p>

          <div className="film__details details">

            <div className="details__block">
              <h3 className="details__head">Heroes</h3>
              {persons.map((person) => (
                <h4
                  key={person.name}
                  className="details_heading"
                >
                  {person.name}
                </h4>
              ))}
            </div>

            <div className="details__block">
              <h3 className="details__head">Planets</h3>
              {planets.map((planet) => (
                <h4
                  key={planet.name}
                  className="details_heading"
                >
                  {planet.name}
                </h4>
              ))}
            </div>

            <div className="details__block">
              <h3 className="details__head">Starships</h3>
              {starships.map((ship) => (
                <h4
                  key={ship.name}
                  className="details_heading"
                >
                  {ship.name}
                </h4>
              ))}
            </div>

          </div>
        </section>
      ) : (
        <section className="section_spinner">
          <div className="spinner" />
        </section>
      )}
    </section>
  );
};

Episode.propTypes = {
  films: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Episode;
