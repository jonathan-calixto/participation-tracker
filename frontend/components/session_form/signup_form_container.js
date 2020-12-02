import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign up',
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    loginDemoUser: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);