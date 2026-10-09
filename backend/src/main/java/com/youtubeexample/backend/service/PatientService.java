package com.youtubeexample.backend.service;

import com.youtubeexample.backend.model.Patient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PatientService {
    public Patient addPatient(Patient patient);
    public Patient getPatientById(long id);
    public List<Patient> getPatients();
    public Patient updatePatient(Patient patient);
    public void deletePatient(long id);
}
