package com.youtubeexample.backend.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="patient_table")
public class Patient {

    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String email;

    // O frontend Vue envia o campo como "pNo" no JSON,
    // mas a coluna no PostgreSQL chama-se "p_no".
    // Por isso mapeamos explicitamente os dois nomes.
    @JsonProperty("pNo")
    @Column(name = "p_no")
    private String pNo;

    private String gender;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getpNo() {
        return pNo;
    }

    public void setpNo(String pNo) {
        this.pNo = pNo;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
