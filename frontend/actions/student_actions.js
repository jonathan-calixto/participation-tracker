import * as StudentAPIUtils from '../util/student_api_util';

export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';
export const RECEIVE_STUDENT = 'RECEIVE_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';

const receiveStudents = students => ({
    type: RECEIVE_STUDENTS,
    students
});

const receiveStudent = student => ({
    type: RECEIVE_STUDENT,
    student
});

const removeStudent = studentId => ({
    type: REMOVE_STUDENT,
    studentId
});

export const fetchStudents = () => dispatch => (
    StudentAPIUtils.fetchStudents()
        .then(students => dispatch(receiveStudents(students)))
);

export const fetchStudent = studentId => dispatch => (
    StudentAPIUtils.fetchStudent(studentId)
        .then(student => dispatch(receiveStudent(student)))
);

export const createStudent = student => dispatch => (
    StudentAPIUtils.createStudent(student)
        .then(student => dispatch(receiveStudent(student)))
);

export const updateStudent = student => dispatch => (
    StudentAPIUtils.updateStudent(student)
        .then(student => dispatch(receiveStudents(student)))
);

export const deleteStudent = studentId => dispatch => (
    StudentAPIUtils.deleteStudent(studentId)
        .then(student => dispatch(removeStudent(student.id)))
);