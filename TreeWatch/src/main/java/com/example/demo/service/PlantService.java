package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Plant;
import com.example.demo.repository.PlantRepo;

@Service
public class PlantService {
	
	@Autowired
	private PlantRepo plantRepo;
	
	public Plant save(Plant P) {
		return this.plantRepo.save(P);	}
	
	public List<Plant> findAll(){
		return this.plantRepo.findAll();
	}

}
