import { connect } from 'react-redux';
import HouseForm from '../components/HouseForm';
import { addData } from '../redux/actions';

function mapDispatchToProps(dispatch) {
  return {
    addSingleHouse: (data) => dispatch(addData(data))
  };
}

export default connect(null, mapDispatchToProps)(HouseForm);
