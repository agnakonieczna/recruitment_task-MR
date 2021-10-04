import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HouseList = ({ fetchHouses, data, loading, error, deleteSingleHouse }) => {

  const clickHandler = (id) => {
    deleteSingleHouse(id);
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  return (
    <section>
      {loading && <p>Ładowanie...</p>}
      {data && (
        <ul>
          {data.map((house) => {
            return (
              <li key={house._id}>
                <button onClick={() => clickHandler(house._id)}>X</button>
                <h2>{house.address}</h2>
                <Link to={`/single-house/${house._id}`}>Zobacz więcej</Link>
              </li>
            );
          })}
        </ul>
      )}
      {error && <p>Coś poszło nie tak</p>}
      <Link to='/house-form'>Dodaj nowy dom</Link>
    </section>
  );
};

export default HouseList;
