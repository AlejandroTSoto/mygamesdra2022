package com.example.demo.repository;

import java.util.List;

import com.example.demo.Entity.Juego;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface JuegoRepository extends CrudRepository<Juego, Long> {
    void añadirJuego(Juego juego);
    List<Juego> findAll();
    
}
