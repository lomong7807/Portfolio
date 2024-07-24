package com.example.back.controller;

import com.example.back.dto.AboutMeDTO;
import com.example.back.service.AboutMeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/aboutMe")
public class AboutMeController {
    private final AboutMeService aboutMeService;
    @GetMapping("")
    public List<AboutMeDTO> findAll(){
        return aboutMeService.findAll();
    }
}
