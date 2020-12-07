import React from 'react';
import StudentIndexItem from './student_index_item';


export default class PhotoIndex extends React.Component {

    componentDidMount() {
        this.props.fetchStudents();
    }

    render() {
        const { students, deleteStudent } = this.props;

        return (
            <div>
                <div>
                    {students.map(student => {
                        return (
                            <li></li>
                        )
                    })}
                </div>
            </div>
        )
    }
}