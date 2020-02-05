import React, {useState, useEffect} from 'react';
import { getData } from "./api/dataApi";

const App = () => {
  const [films, setFilms] = useState([]);
  const filmsFromServer = new getData();

  useEffect(() => {
    filmsFromServer.getAllFilms('/films/').then((data) => {
      setFilms(data.results)
    });
  });


    return (
      <div className="App">
          {films.map(film => <p>{film.title}</p>)}
      </div>
    );
};

export default App;
