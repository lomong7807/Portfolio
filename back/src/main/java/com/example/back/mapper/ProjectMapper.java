package com.example.back.mapper;


import com.example.back.dto.ProjectDTO;
import com.example.back.entity.ProjectEntity;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface ProjectMapper {
    ProjectEntity toEntity(ProjectDTO dto);
    ProjectDTO toDTO(ProjectEntity entity);
}
