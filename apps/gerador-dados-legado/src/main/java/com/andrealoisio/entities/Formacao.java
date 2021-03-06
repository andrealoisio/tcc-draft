package com.andrealoisio.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Formacao extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq_formacao", nullable = false)
    private Integer seqFormacao;
    @Column(name = "nome_curso")
    private String nomeCurso;
    private String nivel;
    @Column(name = "titulo_tese")
    private String tituloTese;
    private String instituicao;
    @Column(name = "area_conhecimento")
    private String areaConhecimento;
    @Column(name = "data_inicio")
    private java.sql.Date dataInicio;
    @Column(name = "data_termino")
    private java.sql.Date dataTermino;

    public Integer getSeqFormacao() {
        return seqFormacao;
    }

    public void setSeqFormacao(Integer seqFormacao) {
        this.seqFormacao = seqFormacao;
    }

    public String getNomeCurso() {
        return nomeCurso;
    }

    public void setNomeCurso(String nomeCurso) {
        this.nomeCurso = nomeCurso;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public String getTituloTese() {
        return tituloTese;
    }

    public void setTituloTese(String tituloTese) {
        this.tituloTese = tituloTese;
    }

    public String getInstituicao() {
        return instituicao;
    }

    public void setInstituicao(String instituicao) {
        this.instituicao = instituicao;
    }

    public String getAreaConhecimento() {
        return areaConhecimento;
    }

    public void setAreaConhecimento(String areaConhecimento) {
        this.areaConhecimento = areaConhecimento;
    }

    public Date getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public void setDataInicio(java.util.Date dataInicio) {
        this.dataInicio = new java.sql.Date(dataInicio.getTime());
    }

    public Date getDataTermino() {
        return dataTermino;
    }

    public void setDataTermino(Date dataTermino) {
        this.dataTermino = dataTermino;
    }

    public void setDataTermino(java.util.Date dataTermino) {
        this.dataTermino = new java.sql.Date(dataTermino.getTime());
    }
}
