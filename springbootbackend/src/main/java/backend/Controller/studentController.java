package backend.Controller;

import backend.Model.StudentEntity;
import backend.Repository.studentRepository;
import backend.customExceptions.StudentNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/restapi/")
public class studentController {

    @Autowired
    private studentRepository studentRepo;

    // Fetch all the student records from table
    @GetMapping("/students")
    public List<StudentEntity> getAllStudents() {
        return studentRepo.findAll();
    }

    // Find a student using studentId
    @GetMapping("/students/{id}")
    public ResponseEntity<StudentEntity> getStudentById(@PathVariable Long id) {

        StudentEntity s = studentRepo.findById(id)
                .orElseThrow( () -> new StudentNotFoundException("Student with id: " + id + "does not exist!"));
        return ResponseEntity.ok(s);
    }

    // Add a new student to records
    @PostMapping("/students")
    public StudentEntity addStudent(@RequestBody StudentEntity s) {
        return studentRepo.save(s);
    }

    // Update student information
    @PutMapping("/students/{id}")
    public ResponseEntity<StudentEntity> updateStudent(@PathVariable Long id, @RequestBody StudentEntity newStudent) {

        StudentEntity oldStudent = studentRepo.findById(id)
                .orElseThrow( () -> new StudentNotFoundException("Student with id: " + id + "does not exist!"));

        oldStudent.setFirstName(newStudent.getFirstName());
        oldStudent.setLastName(newStudent.getLastName());
        oldStudent.setEmailId(newStudent.getEmailId());
        oldStudent.setCity(newStudent.getCity());
        oldStudent.setGrade(newStudent.getGrade());

        StudentEntity updatedStudent = studentRepo.save(oldStudent);
        return ResponseEntity.ok(updatedStudent);

    }

    // Delete a student record using id
    @DeleteMapping("/students/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Long id) {

        StudentEntity oldStudent = studentRepo.findById(id)
                .orElseThrow( () -> new StudentNotFoundException("Student with id: " + id + "does not exist!"));

        studentRepo.delete(oldStudent);

        String response = "Deleted student: " + oldStudent.getFirstName() + " " + oldStudent.getLastName();

        return ResponseEntity.ok(response);

    }
}//studentControllerr
