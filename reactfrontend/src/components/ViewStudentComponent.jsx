import React, { Component } from 'react'
import StudentServices from '../services/StudentServices'

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentServices.getStudentById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }

    cancel() {
        this.props.history.push('/students');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <div className = "text-center" style={{fontSize: "20px", fontWeight: "bold"}}> View Student Record</div>
                    <div className = "card-body">
                        <div className = "row">
                            <label> First Name: {this.state.student.firstName} </label>
                        </div>
                        <div className = "row">
                            <label> Last Name: { this.state.student.lastName }</label>
                        </div>
                        <div className = "row">
                            <label> Email ID:  { this.state.student.emailId }</label>
                        </div>
                        <div className = "row">
                            <label> City:  { this.state.student.city }</label>
                        </div>
                        <div className = "row">
                            <label> Grade:  { this.state.student.grade }</label>
                        </div>
                    </div>
                </div>
                <center>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px",marginTop: "10px"}}> Back </button>
                </center>
            </div>
        )
    }
}

export default ViewStudentComponent;