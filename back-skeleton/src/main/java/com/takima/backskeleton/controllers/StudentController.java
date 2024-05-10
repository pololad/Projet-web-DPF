package com.takima.backskeleton.controllers;

import com.takima.backskeleton.DTO.StudentDto;
import com.takima.backskeleton.models.Student;
import com.takima.backskeleton.services.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin
@RequestMapping("students")
@RestController
@RequiredArgsConstructor
public class StudentController {
    private final StudentService studentService;
    @GetMapping("")
    public List<Student> listStudents(@RequestParam(required = false) Integer statusId, @RequestParam(required = false) Integer offerId) {
        if (statusId != null && offerId !=null) {
            return studentService.searchByStatusAndOffer(statusId, offerId);
        }
        return studentService.findAll();
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteById(id);
    }

    @PostMapping("")
    public void addStudent(@RequestBody StudentDto studentDto) {
        studentService.addStudent(studentDto);
    }

    @PostMapping("/{id}")
    public void updateStudent(@RequestBody StudentDto studentDto, @PathVariable Long id) {
        studentService.updateStudent(studentDto, id);
    }
}
