package com.takima.backskeleton.controllers;

import com.takima.backskeleton.DTO.ClientDto;
import com.takima.backskeleton.models.Client;
import com.takima.backskeleton.services.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin
@RequestMapping("clients")
@RestController
@RequiredArgsConstructor
public class ClientController {
    private final ClientService clientService;
    @GetMapping("")
    public List<Client> listClients(@RequestParam(required = false) Integer statusId, @RequestParam(required = false) Integer offerId) {
        if (statusId != null && offerId !=null) {
            return clientService.searchByStatusAndOffer(statusId, offerId);
        }
        return clientService.findAll();
    }

    @GetMapping("/{id}")
    public Client getClientById(@PathVariable Long id) {
        return clientService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable Long id) {
        clientService.deleteById(id);
    }

    @PostMapping("")
    public void addClient(@RequestBody ClientDto clientDto) {
        clientService.addClient(clientDto);
    }

    @PostMapping("/{id}")
    public void updateStudent(@RequestBody ClientDto clientDto, @PathVariable Long id) {
        clientService.updateClient(clientDto, id);
    }
}
