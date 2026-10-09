package com.youtubeexample.backend.controller;

import com.youtubeexample.backend.model.Patient;
import com.youtubeexample.backend.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
/**
 * CORS (Cross-Origin Resource Sharing)
 * ------------------------------------
 * O frontend Vue (http://localhost:8081) e este backend (http://localhost:8080)
 * estão em portas diferentes, logo são considerados "origens distintas" pelo navegador.
 *
 * Sem esta anotação, o navegador bloqueia as requisições com o erro:
 *   "No 'Access-Control-Allow-Origin' header is present on the requested resource."
 *
 * Em produção, substituir "http://localhost:8081" pelo domínio real do frontend.
 */
@CrossOrigin(origins = "http://localhost:8081")
public class ClientController {

    // service
    @Autowired
    private PatientService patientService;

    @RequestMapping("/")
    public String hello_world() {
        return "Hello World!";
    }

    // Add Patient
    @PostMapping("/add")
    public String addPatient(@RequestBody Patient patient){
        patientService.addPatient(patient);
        return "Added Patient Successfully!";
    }

    // getPatientById
    @RequestMapping("/patient/{id}")
    public Patient getPatient(@PathVariable("id") int id){
        return patientService.getPatientById(id);
    }

    // getPatients
    @RequestMapping("/patients")
    public List<Patient> getPatients(){
        return patientService.getPatients();
    }

    // updatePatient
    @PutMapping("/patient")
    public Patient updatePatient(@RequestBody Patient patient){
        return patientService.updatePatient(patient);
    }

    // deletePatientById
    @DeleteMapping("/patient/{id}")
    public String deletePatient(@PathVariable("id") long id){
        patientService.deletePatient(id);
        return "Deleted Patient Successfully!";
    }
}
