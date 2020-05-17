package com.tailoralm.approval.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.tailoralm.approval.repository.SolicitationRepository;

@RestController @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/solicitations")
public class SolicitationController {

    @Autowired
    private SolicitationRepository solicitationRepository;
    
    // Get all

    @GetMapping("/get")
    public List<Solicitation> getAllSolicitations(){
        return solicitationRepository.findAll();
    }
    
    // Get by status
    
    @GetMapping("/get/approved")
    public List<Solicitation> getAllApproved(){
        return solicitationRepository.findApprovedSolicitations();
    }
    
    @GetMapping("/get/rejected")
    public List<Solicitation> getAllRejected(){
        return solicitationRepository.findRejectedSolicitations();
    }
    
    @GetMapping("/get/pending")
    public List<Solicitation> getAllPending(){
        return solicitationRepository.findPendingSolicitations();
    }
    
    // Get Filter

    @GetMapping("/get/{id}")
    public Solicitation getSolicitationById(@PathVariable(value = "id") Long solicitationId) throws ResourceNotFoundException{
    	return solicitationRepository.findById(solicitationId).orElseThrow(() -> new ResourceNotFoundException());
    }
    
    @GetMapping("/get/name/{name}")
    public List<Solicitation> getSolicitationByName(@PathVariable(value = "name") String name) throws ResourceNotFoundException{
    	return solicitationRepository.findSolicitationsByName(name);
    }
    
    @GetMapping("/get/desc/{desc}")
    public List<Solicitation> getSolicitationByDesc(@PathVariable(value = "desc") String desc) throws ResourceNotFoundException{
    	return solicitationRepository.findSolicitationsByDesc(desc);
    }    
    
    // Put & Post

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
