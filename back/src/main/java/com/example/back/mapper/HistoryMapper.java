package com.example.back.mapper;


import com.example.back.dto.HistoryDTO;
import com.example.back.entity.HistoryEntity;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface HistoryMapper {
    HistoryEntity toEntity(HistoryDTO dto);
    HistoryDTO toDTO(HistoryEntity entity);
}
