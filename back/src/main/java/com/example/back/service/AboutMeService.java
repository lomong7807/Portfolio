package com.example.back.service;

import com.example.back.dto.AboutMeDTO;
import com.example.back.mapper.AboutMeMapper;
import com.example.back.repository.AboutMeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AboutMeService {
    private final AboutMeRepository repository;
    private final AboutMeMapper mapper;
    public List<AboutMeDTO> findAll(){
        return repository.findAllByOrderByNo().stream().map(mapper::toDTO).toList();
    }

}
