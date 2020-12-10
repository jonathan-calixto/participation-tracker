import { connect } from 'react-redux';
import { createStudent } from '../../actions/student_actions';
import StudentCreate from './student_create';


const mSTP = state => {
    return {
        student: {
            firstName: '',
            lastName: '',
            groupId: null,
            teacherId: state.session.id,
        },
        formType: 'Add New Student'
    };
};

const mDTP = dispatch => ({
    createStudent: student => dispatch(createStudent(student))
});

export default connect(mSTP, mDTP)(StudentCreate);