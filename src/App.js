import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import GetData from './api/dataApi';
import Home from './components/home/home';
import Episode from './components/Episode/episode';

const App = () => {
  const [films, setFilms] = useState([]);
  const filmsFromServer = new GetData();

  useEffect(() => {
    filmsFromServer.getAll('/films/').then((data) => {
      setFilms(data.results);
    });
  }, []);


  return (
    <Switch>
      <Route exact path="/">
        <Home
          films={films}
        />
      </Route>

      <Route
        path="/:id"
        render={({ match }) => {
          const { id } = match.params;
          return (
            <Episode
              id={id}
              films={JSON.stringify(films)}
            />
          );
        }}
      />

    </Switch>
  );
};

export default App;
