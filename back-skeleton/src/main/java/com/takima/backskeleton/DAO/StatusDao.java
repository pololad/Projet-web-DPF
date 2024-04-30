package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Status;
import com.takima.backskeleton.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatusDao extends JpaRepository<Status, Long> {
    @Query("SELECT s.clients FROM Status s WHERE s.id= :statusId")
    List<Client> getAllClientFromStatus(Long statusId);
}
