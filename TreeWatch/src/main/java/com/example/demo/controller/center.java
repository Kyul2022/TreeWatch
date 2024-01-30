package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Plant;
import com.example.demo.service.PlantService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class center {
	
	@Autowired
	private PlantService plantService;
	
    @GetMapping("/plants")
    public List<Plant> getUsers() {
    	List <Plant> list = new ArrayList<Plant>();
    	Plant P1 = new Plant(1,"Mangue","hey", 10, 10, 3, 4, "red");
    	list.add(P1);
    	Plant P2 = new Plant(2,"Orange","hey", 10, 10, 3, 4, "yellow");
    	list.add(P2);
    	Plant P3 = new Plant(3,"Goyave","hey", 10, 10, 3, 4, "green");
    	list.add(P3);
    	Plant P4 = new Plant(4,"Papaye","hey", 10, 10, 3, 4, "blue");
    	list.add(P4);
    	Plant P5 = new Plant(5,"Ananas","hey", 10, 10, 3, 4, "pink");
    	list.add(P5);
    	Plant P6 = new Plant(6,"Citron","hey", 10, 10, 3, 4, "black");
    	list.add(P6);

    	return list;
        //return this.plantService.findAll();
    }
    
    @PostMapping("/plants")
    void addPlant(@RequestBody Plant plant) {
    	plant.setWaterLevel(100);
    	plant.setSoilMoistureLevel(100);
        plantService.save(plant);
    }

}
