package com.example.back.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ProjectSkillsTableDTO {
    private int projectSkillNo;
    private int projectNo;
    private String title;
    private String content;
}
