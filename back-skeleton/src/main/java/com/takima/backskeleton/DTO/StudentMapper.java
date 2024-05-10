package com.takima.backskeleton.DTO;

import com.takima.backskeleton.models.Student;

import java.io.IOException;

public class StudentMapper {
    public static Student fromDto(StudentDto dto, Long id) throws IOException {
        return new Student.Builder()
                .id(id)
                .firstName(dto.getFirstName())
                .lastName(dto.getLastName())
                .birthdate(dto.getBirthdate())
                .offers(dto.getOffers())
                .status(dto.getStatus())
                .build();
    }

    public static StudentDto toDto (Student student){
        return StudentDto.builder()
                .firstName(student.getFirstName())
                .lastName(student.getLastName())
                .birthdate(student.getBirthdate())
                .offers(student.getOffers())
                .status(student.getStatus())
                .build();
    }
}
