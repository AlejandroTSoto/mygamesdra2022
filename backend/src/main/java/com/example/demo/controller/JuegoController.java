package com.example.demo.controller;
import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.Entity.Juego;
import com.example.demo.repository.JuegoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("favoritos")
public class JuegoController {

    @Autowired
    private JuegoRepository repository;

    @Transactional
    @GetMapping(path = "/{juegoId}")
    public List<Juego> findByJuegoId(@PathVariable("juegoId") String juegoId) {
        return repository.findByJuegoId(juegoId);
    }
    @PostMapping(path = "")
    public Juego añadirJuego(@RequestBody Juego juego) {
        return repository.save(juego); 
    }
    @GetMapping(path = "")
    public List<Juego> findByAll() {
        return  repository.findAll(); 
    }

    @Transactional
    @DeleteMapping(path = "/{juegoId}")
    public void deleteByMovieID(@PathVariable("juegoID") String juegoID) {
        repository.deleteByJuegoId(juegoID); 
    }
}