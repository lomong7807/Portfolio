package com.example.back.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "project_videos")
public class ProjectVideosEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int projectVideosNo;
    @ManyToOne
    @JoinColumn(name = "projectNo", referencedColumnName = "projectNo")
    private ProjectEntity project;
    private String title;
    private String link;
}
