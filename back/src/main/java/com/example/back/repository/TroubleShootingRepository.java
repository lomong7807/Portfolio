package com.example.back.repository;

import com.example.back.entity.TroubleShootingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TroubleShootingRepository extends JpaRepository<TroubleShootingEntity, Integer> {
    List<TroubleShootingEntity> findByProject_ProjectNo(int projectNo);
}
