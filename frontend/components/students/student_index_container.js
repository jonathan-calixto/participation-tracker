import { connect } from 'react-redux';
import StudentIndex from './student_index';
import { fetchStudents, deleteStudent } from '../../actions/student_actions';

const mSTP = state => ({
    students: Object.values(state.entities.students)
});

const mDTP = dispatch => ({
    fetchStudent: () => dispatch(fetchStudents()),
    deleteStudent: studentId => dispatch(deleteStudent(studentId))
});

export default connect(mSTP, mDTP)(StudentIndex);