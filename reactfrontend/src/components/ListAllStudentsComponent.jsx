import React, { Component } from 'react';
import StudentServices from '../services/StudentServices';

class ListAllStudentsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            allStudents: []
        }

        this.addStudent = this.addStudent.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    addStudent() {
        this.props.history.push('/add-student/new');
    }

    updateStudent(studentId) {
        this.props.history.push(`/add-student/${studentId}`);
    }

    deleteStudent(id) {
        StudentServices.deleteStudent(id).then( res => {
            this.setState({allStudents: this.state.allStudents.filter( s => s.id !== id)});
        });
    }

    viewStudent(id) {
        this.props.history.push(`view-student/${id}`);
    }

    componentDidMount() {
        StudentServices.getAllStudents().then( (result) => {
            this.setState({allStudents: result.data});
        });
    }


    render() {
        return (
            <div>
                <center>
                <div className = "row" style={{margin: "10px", backgroundColor: "coral"}}> 
                        <div className="text-center" style={{fontSize: "20px"}}>All student records</div> 
                </div>
                </center>
                <div className = "row justify-content-center">
                    <table className="table table-bordered table-hover" style={{padding: "10px", backgroundColor: "powderblue", color: "black", width: "85%"}}>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Address</th>
                                <th>City</th>
                                <th>Grade</th>
                                <th colSpan="1">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.allStudents.map(
                                    student =>
                                    <tr key = {student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.emailId}</td>
                                        <td>{student.city}</td>
                                        <td>{student.grade}</td>
                                        <td>
                                            <button onClick = { () => this.updateStudent(student.id)} className = "btn btn-warning"> Update </button>
                                            <button style = {{marginLeft: "10px"}} onClick = { () => this.deleteStudent(student.id)} className = "btn btn-danger"> Delete</button>
                                            <button style = {{marginLeft: "10px"}} onClick = { () => this.viewStudent(student.id)} className = "btn btn-success"> View </button> 
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <center>
                    <button className="btn btn-sm" style={{fontSize: "15px", backgroundColor: "springgreen", textAlign: "center"}} onClick={this.addStudent}> + Add New Student </button>
                 </center>
            </div>
        );
    }
}

export default ListAllStudentsComponent;