package com.example.back.controller;

import com.example.back.dto.HistoryDTO;
import com.example.back.service.HistoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/history")
@RequiredArgsConstructor
public class HistoryController {
    private final HistoryService historyService;
    @RequestMapping("")
    public List<HistoryDTO> findAll(){
        return historyService.findAll();
    }
}
