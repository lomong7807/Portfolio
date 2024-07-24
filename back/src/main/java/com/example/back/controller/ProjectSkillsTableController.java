package com.example.back.controller;

import com.example.back.dto.ProjectSkillsTableDTO;
import com.example.back.service.ProjectSkillsTableService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/project/skillsTable")
public class ProjectSkillsTableController {
    private final ProjectSkillsTableService projectSkillsTableService;
    @GetMapping("")
    public List<ProjectSkillsTableDTO> findByProjectNo(@RequestParam("projectNo") Integer projectNo){
        return projectSkillsTableService.findByProjectNo(projectNo);
    }
}
