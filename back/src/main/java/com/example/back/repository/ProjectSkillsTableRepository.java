package com.example.back.repository;

import com.example.back.entity.ProjectSkillsTableEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectSkillsTableRepository extends JpaRepository<ProjectSkillsTableEntity, Integer> {
    List<ProjectSkillsTableEntity> findByProject_ProjectNo(int projectNo);
}
