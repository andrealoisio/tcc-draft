package com.andrealoisio.entities;

import javax.persistence.*;
import java.sql.Date;

@Entity(name = "carteirinhas_emitidas")
public class CarteirinhasEmitidas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "numero", nullable = false)
    private int numero;
    @Column(name = "data_registro")
    private java.sql.Date dataRegistro;
    @Column(name = "data_vencimento")
    private java.sql.Date dataVencimento;
    private int matricula;

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public Date getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(Date dataRegistro) {
        this.dataRegistro = dataRegistro;
    }

    public Date getDataVencimento() {
        return dataVencimento;
    }

    public void setDataVencimento(Date dataVencimento) {
        this.dataVencimento = dataVencimento;
    }

    public int getMatricula() {
        return matricula;
    }

    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }
}
