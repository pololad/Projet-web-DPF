package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientDao extends JpaRepository<Client, Long> {
    @Query("SELECT c FROM Client c JOIN c.offers o WHERE o.id= :offerId AND c.status.id = :statusId ")
    List<Client> findByStatusIdAndOfferId(int statusId, int offerId);
}
