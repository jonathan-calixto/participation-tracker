export const fetchStudents = () => {
    return $.ajax({
        method: 'get',
        url: 'api/students'
    });
};

export const studentId = studentId => {
    return $.ajax({
        method: 'get',
        url: `api/students/${studentId}`
    });
};

export const createStudent = student => {
    return $.ajax({
        method: 'post',
        url: 'api/students',
        data: student
    });
};

export const updateStudent = student => {
    return $.ajax({
        method: 'patch',
        url: `api/students/${student.id}`,
        data: { student }
    });
};

export const deleteStudent = studentId => {
    return $.ajax({
        method: 'delete',
        url: `api/students/${studentId}`
    });
};