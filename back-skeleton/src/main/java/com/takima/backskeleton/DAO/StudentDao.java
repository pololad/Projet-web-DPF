package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentDao extends JpaRepository<Student, Long> {
    @Query("SELECT s FROM Student s JOIN s.offers c WHERE c.id= :offerId AND s.status.id = :statusId ")
    List<Student> findByStatusIdAndOfferId(int statusId, int offerId);
}
