package com.example.back.service;

import com.example.back.dto.HistoryDTO;
import com.example.back.mapper.HistoryMapper;
import com.example.back.repository.HistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HistoryService {
    private final HistoryRepository historyRepository;
    private final HistoryMapper historyMapper;
    public List<HistoryDTO> findAll() {
        return historyRepository.findAllByOrderByHistoryNoDesc().stream().map(historyMapper::toDTO).toList();
    }

}
