package com.example.demo.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "juegos")
public class Juego {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank(message = "nombre is mandatory")
    private String nombre;

    @Lob
    @NotBlank(message = "imagen is mandatory")
    private String imagen;

    public Juego() {

    }

    public Juego(String nombre, String imagen) {
        this.nombre = nombre;
        this.imagen = imagen;    
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }


    @Override
    public String toString() {
        return "Juego [id=" + id + ", nombre=" + nombre + ", imagen=" + imagen + "]";
    }
}
