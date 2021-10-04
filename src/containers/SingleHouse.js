import { connect } from 'react-redux';
import SingleHouse from '../components/SingleHouse';

function mapStateToProps(state) {
  return {
    data: state.data.data
  };
}

export default connect(mapStateToProps)(SingleHouse);
