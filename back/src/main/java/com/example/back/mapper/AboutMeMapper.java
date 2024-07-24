package com.example.back.mapper;


import com.example.back.dto.AboutMeDTO;
import com.example.back.entity.AboutMeEntity;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface AboutMeMapper {
    AboutMeEntity toEntity(AboutMeDTO dto);
    AboutMeDTO toDTO(AboutMeEntity entity);
}
