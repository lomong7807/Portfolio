package com.example.back.service;

import com.example.back.dto.ProjectVideosDTO;
import com.example.back.mapper.ProjectVideosMapper;
import com.example.back.repository.ProjectVideosRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectVideosService {
    private final ProjectVideosRepository projectVideosRepository;
    private final ProjectVideosMapper projectVideosMapper;
    public List<ProjectVideosDTO> findByProjectNo(int projectNo) {
        return projectVideosRepository.findAllByProject_ProjectNo(projectNo).stream().map(projectVideosMapper::toDTO).toList();
    }
}
