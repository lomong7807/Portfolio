package com.example.back.mapper;

import com.example.back.dto.TroubleShootingDTO;
import com.example.back.entity.TroubleShootingEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TroubleShootingMapper {
    TroubleShootingEntity toEntity(TroubleShootingDTO dto);
    TroubleShootingDTO toDTO(TroubleShootingEntity entity);
}
