package com.example.back.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "about_me")
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class AboutMeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;
    private String title;
    private String iTag;
    private String content;
    private Boolean isATag;
    private String aTagHref;
}
