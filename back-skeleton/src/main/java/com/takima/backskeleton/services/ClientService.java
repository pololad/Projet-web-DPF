package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.ClientDao;
import com.takima.backskeleton.DTO.ClientDto;
import com.takima.backskeleton.DTO.ClientMapper;
import com.takima.backskeleton.models.Client;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class ClientService {
    private final ClientDao clientDao;

    public List<Client> findAll() {
        Iterable<Client> it = clientDao.findAll();
        List <Client> users = new ArrayList<>();
        it.forEach(users::add);
        return users ;
    }

    public Client getById(Long id) {
        return clientDao.findById(id).orElseThrow();
    }

    @Transactional
    public void deleteById(Long id) {
        clientDao.deleteById(id);
    }

    @Transactional
    public void addClient(ClientDto clientDto) {
        Client client;
        try {
            client = ClientMapper.fromDto(clientDto, null);
        } catch (IOException e) {
            throw new RuntimeException("Error with Client image", e);
        }

        clientDao.save(client);
    }

    @Transactional
    public void updateClient(ClientDto clientDto, Long id) {
        clientDao.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Client doesn't exist"));
        Client client;
        try {
            client = ClientMapper.fromDto(clientDto, id);
        } catch (IOException e) {
            throw new RuntimeException("Error with Client image", e);
        }
        clientDao.save(client);
    }

    public List<Client> searchByStatusAndOffer(int statusId, int offerId) {
        return clientDao.findByStatusIdAndOfferId(statusId, offerId);
    }
}
