import { RECEIVE_STUDENTS, RECEIVE_STUDENT, REMOVE_STUDENT } from '../actions/student_actions';

export const studentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_STUDENTS:
            return action.students;
        case RECEIVE_STUDENT:
            return Object.assign({}, state, { [action.student.id]: action.student });
        case REMOVE_STUDENT:
            delete newState[action.studentId];
            return newState;
        default:
            return state;
    }
};