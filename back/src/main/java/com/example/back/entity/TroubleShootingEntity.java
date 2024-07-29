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
@Table(name = "trouble_shooting")
public class TroubleShootingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int troubleShootingNo;
    @ManyToOne
    @JoinColumn(name = "projectNo", referencedColumnName = "projectNo")
    private ProjectEntity project;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String content;
}
