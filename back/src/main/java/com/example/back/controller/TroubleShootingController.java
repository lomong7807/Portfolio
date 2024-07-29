package com.example.back.controller;

import com.example.back.dto.TroubleShootingDTO;
import com.example.back.service.TroubleShootingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/project/troubleshooting")
@RequiredArgsConstructor
public class TroubleShootingController {
    private final TroubleShootingService troubleshootingService;

    @GetMapping("")
    public List<TroubleShootingDTO> findByProjectNo(@RequestParam("projectNo") Integer projectNo) {
        return troubleshootingService.findByProjectNo(projectNo);
    }

}
