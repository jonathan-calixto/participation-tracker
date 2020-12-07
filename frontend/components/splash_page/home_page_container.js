import { connect } from 'react-redux';
import HomePage from './home_page';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(HomePage);