package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.TopJuegosDto;
import com.example.demo.services.TopJuegosService;

@RestController
@RequestMapping("/topJuegos")
public class TopJuegosController {

    @Autowired
    private TopJuegosService topJuegosService;

    @GetMapping("data")
    public ResponseEntity<List<TopJuegosDto>> getTopJuegos() {
        return new ResponseEntity<List<TopJuegosDto>>(topJuegosService.retrieveTopJuegos(),
                HttpStatus.OK);
    }
}
