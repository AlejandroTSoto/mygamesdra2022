package com.example.demo.dto;

public class TopJuegosDto {
    public Integer position;
    public String title;
    public String genre;
    public String saleDate;
    
    public TopJuegosDto(Integer position, String title, String genre, String saleDate) {
        this.position = position;
        this.title = title;
        this.genre = genre;
        this.saleDate = saleDate;
    }

    public TopJuegosDto() {
    }
}