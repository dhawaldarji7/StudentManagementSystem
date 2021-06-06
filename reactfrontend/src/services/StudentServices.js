import axios from 'axios';

const BASE_URL = "http://localhost:8080/restapi/students";

class StudentServices {

    // Get all student records
    getAllStudents() {
        return axios.get(BASE_URL);
    }

    // Find a student using studentId
    getStudentById(studentId) {
        return axios.get(BASE_URL + '/' + studentId);
    }

    // Adding a new student
    addStudent(student) {
        return axios.post(BASE_URL, student);
    }

    // Update a student record
    updateStudent(student, studentId) {
        return axios.get(BASE_URL + '/' + studentId, student);
    }

    // delete a student record
    deleteStudent(studentId) {
        return axios.delete(BASE_URL + '/' + studentId);
    }

}
export default new StudentServices();