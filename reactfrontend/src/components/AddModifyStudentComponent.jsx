import React, { Component } from 'react';
import StudentServices from '../services/StudentServices';

class AddModifyStudentComponent extends Component {

    constructor(props) {
        super(props)

    this.state = {
        id: this.props.match.params.id,
        firstName: '',
        lastName: '',
        emailId: '',
        city: '',
        grade: ''
    }

        this.firstNameHandler = this.firstNameHandler.bind(this);
        this.lastNameHandler = this.lastNameHandler.bind(this);
        this.emailIdHandler = this.emailIdHandler.bind(this);
        this.cityHandler = this.cityHandler.bind(this);
        this.gradeHandler = this.gradeHandler.bind(this);
        this.addOrUpdateStudent = this.addOrUpdateStudent.bind(this);
        
    }

    componentDidMount() {

        if (this.state.id === 'new') {
            return
        } else {
            StudentServices.getStudentById(this.state.id).then( (res) => {
                let newStudent = res.data;
                this.setState({
                    firstName: newStudent.firstName,
                    lastName: newStudent.lastName,
                    emailId: newStudent.emailId,
                    city: newStudent.city,
                    grade: newStudent.grade
                });

            });
        }
    }

    addOrUpdateStudent = (s) => {
        s.preventDefault();
        let s1 = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId,
            city: this.state.city,
            grade: this.state.grade
        };

        console.log('Student => ' + JSON.stringify(s1));

        if (this.state.id === 'new') {
            StudentServices.addStudent(s1).then( (res) => {
                this.props.history.push('/students');
            });
        } else {
            StudentServices.updateStudent(s1, this.state.id).then( (res) => {
                this.props.history.push('/students');
            });
        }
    }

    firstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    lastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    emailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    cityHandler = (event) => {
        this.setState({city: event.target.value});
    }

    gradeHandler = (event) => {
        this.setState({grade: event.target.value});
    }
    
    cancel() {
        this.props.history.push('/students');
    }
    

    getTitle() {
        if (this.state.id === 'new') {
            return <h3 className="text-center">Add Student</h3>
        } else {
            return <h3 className="text-center">Update Student</h3>
        }
    }

    render() {
        return(
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.firstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.lastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Email Id: </label>
                                        <input placeholder="Email Id" name="emailId" className="form-control"
                                        value={this.state.emailId} onChange={this.emailIdHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>City: </label>
                                        <input placeholder="city" name="city" className="form-control"
                                        value={this.state.city} onChange={this.cityHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Grade: </label>
                                        <input placeholder="grade" name="grade" className="form-control"
                                        value={this.state.grade} onChange={this.gradeHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.addOrUpdateStudent} style={{marginLeft: "10px",marginTop: "10px"}}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px",marginTop: "10px"}}> Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
   
}
export default AddModifyStudentComponent;