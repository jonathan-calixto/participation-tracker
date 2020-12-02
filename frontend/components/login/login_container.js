import { connect } from 'react-redux';
import { clearErrors, logout } from '../../actions/session_actions';
import Login from './login';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(Login);