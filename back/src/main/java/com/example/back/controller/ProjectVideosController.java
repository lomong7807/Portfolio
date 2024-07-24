package com.example.back.controller;

import com.example.back.dto.ProjectVideosDTO;
import com.example.back.service.ProjectVideosService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/project/videos")
@RequiredArgsConstructor
public class ProjectVideosController {
    private final ProjectVideosService projectVideosService;

    @GetMapping("")
    public List<ProjectVideosDTO> findByProjectNo(@RequestParam("projectNo") Integer projectNo) {
        return projectVideosService.findByProjectNo(projectNo);
    }
}
