package com.example.back.service;

import com.example.back.dto.ProjectDTO;
import com.example.back.mapper.ProjectMapper;
import com.example.back.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;
    public List<ProjectDTO> findAll(){
        return projectRepository.findAllByOrderByProjectNoDesc().stream().map(projectMapper::toDTO).toList();
    }
}
