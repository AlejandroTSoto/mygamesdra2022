package com.example.demo.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import com.example.demo.dto.TopJuegosDto;

@Component("topJuegosService")
public class TopJuegosService {
    public List<TopJuegosDto> retrieveTopJuegos() {

        List<TopJuegosDto> topJuegos = new ArrayList<>();

        try {
            Document webPage = Jsoup.connect("https://howlongtobeat.com/stats")
                    .get();
                    Element tbody = webPage.getElementById("tb926").getElementsByTag("tbody").get(0);
            
            List<Element> rows = tbody.children().subList(1, tbody.children().size());

            for (Element row : rows) {
                
                /* Si no hay etiquetas td, significa que no hay caracteristicas que enseñar */
                Elements tds = row.getElementsByTag("td");
                if(tds.isEmpty())
                    continue;
                
                /* Se llama a la posición td que queremos mostrar */
                Integer position = toIntOrNull(tds.get(0).text());
                String title = tds.get(2).text();
                String genre = tds.get(3).text();
                String saleDate = tds.get(4).text();
                
                topJuegos.add(new TopJuegosDto(position, title, genre, saleDate));
            }

            return topJuegos;

        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    private Integer toIntOrNull(String replace) {
        try {
            return Integer.parseInt(replace.replace(",", ""));
        } catch (NumberFormatException e) {
            return null;
        }
    }
}
