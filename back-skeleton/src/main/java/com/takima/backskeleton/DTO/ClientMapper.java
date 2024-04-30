package com.takima.backskeleton.DTO;

import com.takima.backskeleton.models.Client;

import java.io.IOException;

public class ClientMapper {
    public static Client fromDto(ClientDto dto, Long id) throws IOException {
        return new Client.Builder()
                .id(id)
                .firstName(dto.getFirstName())
                .lastName(dto.getLastName())
                .birthdate(dto.getBirthdate())
                .offers(dto.getOffers())
                .status(dto.getStatus())
                .build();
    }

    public static ClientDto toDto (Client client){
        return ClientDto.builder()
                .firstName(client.getFirstName())
                .lastName(client.getLastName())
                .birthdate(client.getBirthdate())
                .offers(client.getOffers())
                .status(client.getStatus())
                .build();
    }
}
