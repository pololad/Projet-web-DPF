package com.takima.backskeleton.models;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.Instant;
import java.util.List;

@Entity
@Table(name = "clients")
@Getter
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    private Instant birthdate;

    @ManyToMany
    @JoinTable(
            name = "client_offer",
            joinColumns = @JoinColumn(name = "client_id"),
            inverseJoinColumns = @JoinColumn(name = "offer_id"))
    private List<Offer> offers;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "status_id")
    private Status status;

    private Client(Client.Builder builder) {
        this.id = builder.id;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.birthdate = builder.birthdate;
        this.offers = builder.offers;
        this.status = builder.status;
    }
    public Client() {
    }

    public static class Builder {
        private Long id;
        private String firstName;
        private String lastName;
        private Instant birthdate;
        private List<Offer> offers;
        private Status status;

        public Client.Builder id (Long id) {
            this.id = id;
            return this;
        }

        public Client.Builder firstName(String firstName) {
            this.firstName = firstName;
            return this;
        }
        public Client.Builder lastName(String lastName) {
            this.lastName = lastName;
            return this;
        }
        public Client.Builder birthdate(Instant birthdate) {
            this.birthdate = birthdate;
            return this;
        }
        public Client.Builder offers(List<Offer> offers) {
            this.offers = offers;
            return this;
        }
        public Client.Builder status(Status status) {
            this.status = status;
            return this;
        }


        public Client build() {
            return new Client(this);
        }
    }
}
