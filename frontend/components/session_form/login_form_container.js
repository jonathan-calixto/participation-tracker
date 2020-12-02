import { connect } from 'react-redux';
import { clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Log in',
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    loginDemoUser: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);