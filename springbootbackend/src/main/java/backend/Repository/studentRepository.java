package backend.Repository;

import backend.Model.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface studentRepository extends JpaRepository<StudentEntity, Long> {
}
