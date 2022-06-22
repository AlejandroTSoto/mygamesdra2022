package com.example.demo.controller;
import java.util.List;

import com.example.demo.Entity.Juego;
import com.example.demo.repository.JuegoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/favoritos")
public class JuegoController {

    @Autowired
    private JuegoRepository repository;

    @PostMapping(path = "")
    public Juego addJuego(@RequestBody Juego juego) {
        return repository.save(juego); 
    }
    @GetMapping(path = "")
    public List<Juego> findAll() {
        return  repository.findAll(); 
    }

}