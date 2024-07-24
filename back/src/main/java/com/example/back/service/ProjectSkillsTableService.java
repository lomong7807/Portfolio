package com.example.back.service;

import com.example.back.dto.ProjectSkillsTableDTO;
import com.example.back.mapper.ProjectSkillsTableMapper;
import com.example.back.repository.ProjectSkillsTableRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectSkillsTableService {
    private final ProjectSkillsTableRepository projectSkillsTableRepository;
    private final ProjectSkillsTableMapper projectSkillsTableMapper;
    public List<ProjectSkillsTableDTO> findByProjectNo(Integer projectNo){
        return projectSkillsTableRepository.findByProject_ProjectNo(projectNo).stream().map(projectSkillsTableMapper::toDTO).toList();
    }
}
