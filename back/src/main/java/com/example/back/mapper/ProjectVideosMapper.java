package com.example.back.mapper;


import com.example.back.dto.ProjectVideosDTO;
import com.example.back.entity.ProjectVideosEntity;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface ProjectVideosMapper {
    ProjectVideosEntity toEntity(ProjectVideosDTO dto);
    ProjectVideosDTO toDTO(ProjectVideosEntity entity);
}
