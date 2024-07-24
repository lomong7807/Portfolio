package com.example.back.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ProjectDTO {
    private int projectNo;
    private String title;
    private String date;
    private String content;
    private String imgLink;
    private String githubLink;
}
