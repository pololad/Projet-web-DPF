package com.takima.backskeleton.DTO;

import com.takima.backskeleton.models.Offer;
import com.takima.backskeleton.models.Status;
import lombok.Builder;
import lombok.Getter;

import java.time.Instant;
import java.util.List;
@Builder
@Getter
public class StudentDto {
    private String firstName;
    private String lastName;
    private Instant birthdate;
    private List<Offer> offers;
    private Status status;
}
