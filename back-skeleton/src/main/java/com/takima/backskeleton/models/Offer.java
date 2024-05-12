

package com.takima.backskeleton.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.time.Instant;
import java.util.List;

    @Entity
    @Table(name = "offers")
    @NoArgsConstructor
    @Getter
    public class Offer {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String difficulty;
        private Instant begin_date;
        private Instant ending_date;

        @ManyToMany(mappedBy = "offers")
        @JsonIgnore
        List<Student> students;

    }


