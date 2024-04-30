package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.OfferDao;
import com.takima.backskeleton.models.Offer;
import com.takima.backskeleton.models.Status;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class OfferService {
    private final OfferDao offerDao;

    public List<Offer> findAll() {
        return offerDao.findAll();
    }
}
