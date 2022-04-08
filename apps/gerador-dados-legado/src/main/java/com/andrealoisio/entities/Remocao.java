package com.andrealoisio.entities;

import org.postgresql.geometric.PGpoint;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
public class Remocao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq_remocao", nullable = false)
    private Integer seq_remocao;
    private Integer paciente;
    @Column(name = "data_registro")
    private java.sql.Date data_registro;
    @Column(name = "data_remocao")
    private java.sql.Date data_remocao;
    private java.math.BigDecimal custo;
    @Column(name = "ind_dificuldade_mobilidade")
    private boolean ind_dificuldade_mobilidade;
    @Column(name = "coordenada_origem")
    private PGpoint coordenada_origem;
    @Column(name = "coordenada_destino")
    private PGpoint coordenada_destino;
    @Column(name = "nome_endereco_origem")
    private String nome_endereco_origem;
    @Column(name = "bairro_origem")
    private String bairro_origem;
    @Column(name = "cidade_origem")
    private String cidade_origem;
    @Column(name = "uf_origem")
    private String uf_origem;
    @Column(name = "cep_origem")
    private String cep_origem;
    @Column(name = "nome_endereco_destino")
    private String nome_endereco_destino;
    @Column(name = "bairro_destino")
    private String bairro_destino;
    @Column(name = "cidade_destino")
    private String cidade_destino;
    @Column(name = "uf_destino")
    private String uf_destino;
    @Column(name = "cep_destino")
    private String cep_destino;
    @Column(name = "observacao_destino")
    private String observacao_destino;
    @Column(name = "responsavel_destino")
    private String responsavel_destino;

    public Integer getSeq_remocao() {
        return seq_remocao;
    }

    public void setSeq_remocao(Integer seq_remocao) {
        this.seq_remocao = seq_remocao;
    }

    public Integer getPaciente() {
        return paciente;
    }

    public void setPaciente(Integer paciente) {
        this.paciente = paciente;
    }

    public Date getData_registro() {
        return data_registro;
    }

    public void setData_registro(Date data_registro) {
        this.data_registro = data_registro;
    }

    public Date getData_remocao() {
        return data_remocao;
    }

    public void setData_remocao(Date data_remocao) {
        this.data_remocao = data_remocao;
    }

    public BigDecimal getCusto() {
        return custo;
    }

    public void setCusto(BigDecimal custo) {
        this.custo = custo;
    }

    public boolean isInd_dificuldade_mobilidade() {
        return ind_dificuldade_mobilidade;
    }

    public void setInd_dificuldade_mobilidade(boolean ind_dificuldade_mobilidade) {
        this.ind_dificuldade_mobilidade = ind_dificuldade_mobilidade;
    }

    public PGpoint getCoordenada_origem() {
        return coordenada_origem;
    }

    public void setCoordenada_origem(PGpoint coordenada_origem) {
        this.coordenada_origem = coordenada_origem;
    }

    public PGpoint getCoordenada_destino() {
        return coordenada_destino;
    }

    public void setCoordenada_destino(PGpoint coordenada_destino) {
        this.coordenada_destino = coordenada_destino;
    }

    public String getNome_endereco_origem() {
        return nome_endereco_origem;
    }

    public void setNome_endereco_origem(String nome_endereco_origem) {
        this.nome_endereco_origem = nome_endereco_origem;
    }

    public String getBairro_origem() {
        return bairro_origem;
    }

    public void setBairro_origem(String bairro_origem) {
        this.bairro_origem = bairro_origem;
    }

    public String getCidade_origem() {
        return cidade_origem;
    }

    public void setCidade_origem(String cidade_origem) {
        this.cidade_origem = cidade_origem;
    }

    public String getUf_origem() {
        return uf_origem;
    }

    public void setUf_origem(String uf_origem) {
        this.uf_origem = uf_origem;
    }

    public String getCep_origem() {
        return cep_origem;
    }

    public void setCep_origem(String cep_origem) {
        this.cep_origem = cep_origem;
    }

    public String getNome_endereco_destino() {
        return nome_endereco_destino;
    }

    public void setNome_endereco_destino(String nome_endereco_destino) {
        this.nome_endereco_destino = nome_endereco_destino;
    }

    public String getBairro_destino() {
        return bairro_destino;
    }

    public void setBairro_destino(String bairro_destino) {
        this.bairro_destino = bairro_destino;
    }

    public String getCidade_destino() {
        return cidade_destino;
    }

    public void setCidade_destino(String cidade_destino) {
        this.cidade_destino = cidade_destino;
    }

    public String getUf_destino() {
        return uf_destino;
    }

    public void setUf_destino(String uf_destino) {
        this.uf_destino = uf_destino;
    }

    public String getCep_destino() {
        return cep_destino;
    }

    public void setCep_destino(String cep_destino) {
        this.cep_destino = cep_destino;
    }

    public String getObservacao_destino() {
        return observacao_destino;
    }

    public void setObservacao_destino(String observacao_destino) {
        this.observacao_destino = observacao_destino;
    }

    public String getResponsavel_destino() {
        return responsavel_destino;
    }

    public void setResponsavel_destino(String responsavel_destino) {
        this.responsavel_destino = responsavel_destino;
    }
}
