import React from 'react';

export default class PhotoIndex extends React.Component {

    componentDidMount() {
        this.props.fetchStudents();
    }

    render() {
        const { students, deleteStudent } = this.props;

        return (
            <div>
                <ul>
                    {students.map(student => (
                        <li>{student.lastName}, {student.firstName} - <button onClick={deleteStudent} >Delete</button></li>
                    ))}
                </ul>
            </div>
        )
    }
}