package com.example.back.controller;

import com.example.back.dto.ProjectDTO;
import com.example.back.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/project")
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService projectService;
    @GetMapping("")
    public List<ProjectDTO> findAll(){
        return projectService.findAll();
    }
}
