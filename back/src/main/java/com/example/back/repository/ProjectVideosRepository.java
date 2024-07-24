package com.example.back.repository;

import com.example.back.entity.ProjectVideosEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectVideosRepository extends JpaRepository<ProjectVideosEntity, Integer> {
    List<ProjectVideosEntity> findAllByProject_ProjectNo(int projectNo);
}
