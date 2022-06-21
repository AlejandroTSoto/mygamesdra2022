package com.example.demo.repository;

import java.util.List;

import com.example.demo.Entity.Juego;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.repository.query.Param;

@RepositoryRestResource
public interface JuegoRepository extends CrudRepository<Juego, Long> {
    List<Juego> findByJuegoId(@Param("juegoId") String juegoId);
    List<Juego> findAll();
    void deleteByJuegoId(@Param("juegoId") String juegoId);
    
}
