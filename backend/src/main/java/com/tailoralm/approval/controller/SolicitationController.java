package com.tailoralm.approval.controller;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tailoralm.approval.exception.ResourceNotFoundException;
import com.tailoralm.approval.model.Solicitation;
import com.tailoralm.approval.model.Status;
import com.tailoralm.approval.repository.SolicitationRepository;

@RestController @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/solicitations")
public class SolicitationController {

    @Autowired
    private SolicitationRepository solicitationRepository;

    @GetMapping("/get")
    public List<Solicitation> getAllSolicitations(){
        return solicitationRepository.findAll();
    }

    @GetMapping("/get/{id}")
    public Solicitation getSolicitationById(@PathVariable(value = "id") Long solicitationId) throws ResourceNotFoundException{
    	return solicitationRepository.findById(solicitationId).orElseThrow(() -> new ResourceNotFoundException("Solicitação de id "+solicitationId+" não encontrada"));
    	
    }

    @PostMapping()
    public Solicitation createSolicitation(@Valid @RequestBody Solicitation solicitation) {
    	return solicitationRepository.save(solicitation);
    }
    
    @PutMapping("/{id}")
    public Solicitation updateSolicitation(@PathVariable(value = "id") Long solicitationId, @RequestBody Solicitation solicitation) throws ResourceNotFoundException {
    	Solicitation solicitationBd = getSolicitationById(solicitationId);    	
    	solicitationBd.setStatus(solicitation.getStatus());
    	solicitationBd.setObservation(solicitation.getObservation());	
    	
        return solicitationRepository.save(solicitation);
    }
}
