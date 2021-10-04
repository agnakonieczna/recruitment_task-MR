import HouseList from '../components/HouseList';
import { fetchData, deleteData } from '../redux/actions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  console.log(state)
  return {
    loading: state.data.loading,
    data: state.data.data,
    error: state.data.error
  };
}

function mapDispatchToProps(dispatch, id) {
  return {
    fetchHouses: () => dispatch(fetchData()),
    deleteSingleHouse: (id) => dispatch(deleteData(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseList);
