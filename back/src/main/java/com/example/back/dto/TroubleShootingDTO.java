package com.example.back.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TroubleShootingDTO {
    private int troubleShootingNo;
    private int projectNo;
    private String title;
    private String content;
}
