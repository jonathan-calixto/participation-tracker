import { connect } from 'react-redux';
import Splash from './splash';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(Splash);