import { useParams } from 'react-router-dom';

const SingleHouse = ({ data }) => {
  let { id } = useParams();
  console.log(data);
  const searchedHouse = data.find((item) => item._id === id);
  console.log(searchedHouse);

  return (
    <section>
      <h2>{searchedHouse.address}</h2>
      <p>{searchedHouse.description}</p>
      <p>{searchedHouse.floorsNumber}</p>
    </section>
  );
};

export default SingleHouse;
