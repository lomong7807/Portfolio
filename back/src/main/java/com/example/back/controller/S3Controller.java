package com.example.back.controller;

import com.example.back.service.S3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.IOException;

@Controller
@RequiredArgsConstructor
public class S3Controller {

    private final S3Service s3Service;

    @GetMapping("/csv_download")
    public ResponseEntity<byte[]> download(@RequestParam String fileName) throws IOException {
        return s3Service.getObject(fileName);
    }
}
