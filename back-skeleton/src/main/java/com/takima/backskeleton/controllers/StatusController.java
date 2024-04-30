package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Client;
import com.takima.backskeleton.models.Status;
import com.takima.backskeleton.services.StatusService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("statuses")
@RestController
@RequiredArgsConstructor
public class StatusController {
    private final StatusService statusService;

    @GetMapping("")
    public List<Status> findAll() {
        return statusService.findAll();
    }

    @GetMapping("/{id}/clients")
    public List<Client> getClientsOfStatus(@PathVariable Long id) {
        return statusService.getClientsOfStatus(id);
    }
}
