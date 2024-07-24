package com.example.back.repository;

import com.example.back.entity.AboutMeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AboutMeRepository extends JpaRepository<AboutMeEntity, Integer> {
    List<AboutMeEntity> findAllByOrderByNo();
}
