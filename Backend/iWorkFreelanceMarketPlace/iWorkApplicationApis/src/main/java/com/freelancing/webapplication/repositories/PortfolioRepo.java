package com.freelancing.webapplication.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freelancing.webapplication.entities.Portfolio;

public interface PortfolioRepo extends JpaRepository<Portfolio, Integer>{

	List<Portfolio> findByUser_id(Integer user_id);
    
}
