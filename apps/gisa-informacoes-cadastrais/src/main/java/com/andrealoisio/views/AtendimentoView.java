package com.andrealoisio.views;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.*;
import java.sql.Date;

@Entity(name = "v_atendimento")
public class AtendimentoView extends PanacheEntityBase {
    @Id
    @Column(name = "seq_atendimento", nullable = false)
    private Integer seqAtendimento;
    @Column(name = "data_atendimento")
    private java.sql.Date dataAtendimento;
    @Column(name = "matricula_associado")
    private Integer matriculaAssociado;
    @Column(name = "nome_associado")
    private String nomeAssociado;
    private String situacao;
    private String tipo;
    private String custo;
    private String cid;
    @Column(name = "codigo_prestador")
    private Integer codigoPrestador;
    @Column(name = "nome_prestador")
    private String nomePrestador;
    @Column(name = "funcional_prestador")
    private String funcionalPrestador;
    @Column(name = "clinica_parceira")
    private String clinicaParceira;

    public Integer getSeqAtendimento() {
        return seqAtendimento;
    }

    public void setSeqAtendimento(Integer seqAtendimento) {
        this.seqAtendimento = seqAtendimento;
    }

    public Date getDataAtendimento() {
        return dataAtendimento;
    }

    public void setDataAtendimento(Date dataAtendimento) {
        this.dataAtendimento = dataAtendimento;
    }

    public Integer getMatriculaAssociado() {
        return matriculaAssociado;
    }

    public void setMatriculaAssociado(Integer matriculaAssociado) {
        this.matriculaAssociado = matriculaAssociado;
    }

    public String getNomeAssociado() {
        return nomeAssociado;
    }

    public void setNomeAssociado(String nomeAssociado) {
        this.nomeAssociado = nomeAssociado;
    }

    public String getSituacao() {
        return situacao;
    }

    public void setSituacao(String situacao) {
        this.situacao = situacao;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getCusto() {
        return custo;
    }

    public void setCusto(String custo) {
        this.custo = custo;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    public Integer getCodigoPrestador() {
        return codigoPrestador;
    }

    public void setCodigoPrestador(Integer codigoPrestador) {
        this.codigoPrestador = codigoPrestador;
    }

    public String getNomePrestador() {
        return nomePrestador;
    }

    public void setNomePrestador(String nomePrestador) {
        this.nomePrestador = nomePrestador;
    }

    public String getFuncionalPrestador() {
        return funcionalPrestador;
    }

    public void setFuncionalPrestador(String funcionalPrestador) {
        this.funcionalPrestador = funcionalPrestador;
    }

    public String getClinicaParceira() {
        return clinicaParceira;
    }

    public void setClinicaParceira(String clinicaParceira) {
        this.clinicaParceira = clinicaParceira;
    }
}
