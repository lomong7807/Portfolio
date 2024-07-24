package com.example.back.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class HistoryDTO {
    private int historyNo;
    private String title;
    private String start;
    private String end;
    private String content;
}
