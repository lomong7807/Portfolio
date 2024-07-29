package com.example.back.service;

import com.example.back.dto.TroubleShootingDTO;
import com.example.back.mapper.TroubleShootingMapper;
import com.example.back.repository.TroubleShootingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TroubleShootingService {
    private final TroubleShootingRepository troubleShootingRepository;
    private final TroubleShootingMapper troubleShootingMapper;
    public List<TroubleShootingDTO> findByProjectNo(int projectNo){
        return troubleShootingRepository.findByProject_ProjectNo(projectNo).stream().map(troubleShootingMapper::toDTO).toList();
    }
}
