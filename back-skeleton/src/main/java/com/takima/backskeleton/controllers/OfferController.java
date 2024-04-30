package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Offer;
import com.takima.backskeleton.services.OfferService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RequestMapping("offers")
@RestController
@RequiredArgsConstructor
public class OfferController {
    private final OfferService offerService;

    @GetMapping("")
    public List<Offer> getAllOffers() {
        return offerService.findAll();
    }
}
