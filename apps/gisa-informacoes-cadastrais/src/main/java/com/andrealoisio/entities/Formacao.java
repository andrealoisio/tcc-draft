package com.andrealoisio.entities;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Formacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq_formacao", nullable = false)
    private int seqFormacao;
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

    public int getSeqFormacao() {
        return seqFormacao;
    }

    public void setSeqFormacao(int seqFormacao) {
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

    public Date getDataTermino() {
        return dataTermino;
    }

    public void setDataTermino(Date dataTermino) {
        this.dataTermino = dataTermino;
    }
}
