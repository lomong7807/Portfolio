package com.example.back.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "project_skills")
public class ProjectSkillsTableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int projectSkillNo;
    @ManyToOne
    @JoinColumn(name = "projectNo")
    private ProjectEntity project;
    private String title;
    private String content;
}
