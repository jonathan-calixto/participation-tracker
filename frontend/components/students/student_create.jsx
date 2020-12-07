import React from 'react';
import StudentIndex from './student_index_container';

export default class StudentCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.student;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return event => this.setState({ [field]: event.currentTarget.value });
    }

    handleSubmit(event) {
        const formData = new FormData();
        formData.append('student[first_name]', this.state.firstName);
        formData.append('student[last_name]', this.state.lastName);
        formData.append('student[teacher_id]', this.state.teacherId);
        formData.append('student[group_id]', this.state.groupId);
        this.props.createStudent(formData);
    }

    render() {

        return (
            <div>
                <div>
                    <h2>Add Students</h2>
                </div>

                <StudentIndex />

                <form onSubmit={this.handleSubmit}>
                    <label>First Name:
                        <br />
                        <input
                            type="text"
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                            required
                        />
                    </label>
                    <br /><br />
                    <label>Last Name:
                        <br />
                        <input
                            type="text"
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                            required
                        />
                    </label>
                    <br /><br />
                    <button type='submit'>Add student</button>
                </form>
            </div>
        );
    }
}