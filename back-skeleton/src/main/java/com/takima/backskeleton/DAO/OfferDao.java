package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferDao extends JpaRepository<Offer, Long> {
}
