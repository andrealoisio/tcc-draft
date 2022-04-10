package com.andrealoisio.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
public class Atendimento extends PanacheEntityBase {
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq_atendimento", nullable = false)
    @JsonProperty("seq_atendimento")
    private Integer seqAtendimento;
    @Column(name = "data_atendimento")
    @JsonProperty("data_atendimento")
    private java.sql.Date dataAtendimento;
    @Column(name = "data_registro")
    @JsonProperty("data_registro")
    private java.sql.Date dataRegistro;
    private String situacao;
    private String tipo;
    @JsonIgnore
    private java.math.BigDecimal custo;
    private String cid;
    @Column(name = "seq_associado")
    @JsonProperty("seq_associado")
    private Integer seqAssociado;
    @Column(name = "codigo_prestador")
    @JsonProperty("codigo_prestador")
    private Integer codigoPrestador;
    @Column(name = "seq_conveniado")
    @JsonProperty("seq_conveniado")
    private Integer seqConveniado;
    @Column(name = "seq_procedimento")
    @JsonProperty("seq_procedimento")
    private Integer seqProcedimento;
    private String observacao;

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

    public Date getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(Date dataRegistro) {
        this.dataRegistro = dataRegistro;
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

    public BigDecimal getCusto() {
        return custo;
    }

    public void setCusto(BigDecimal custo) {
        this.custo = custo;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    public Integer getSeqAssociado() {
        return seqAssociado;
    }

    public void setSeqAssociado(Integer seqAssociado) {
        this.seqAssociado = seqAssociado;
    }

    public Integer getCodigoPrestador() {
        return codigoPrestador;
    }

    public void setCodigoPrestador(Integer codigoPrestador) {
        this.codigoPrestador = codigoPrestador;
    }

    public Integer getSeqConveniado() {
        return seqConveniado;
    }

    public void setSeqConveniado(Integer seqConveniado) {
        this.seqConveniado = seqConveniado;
    }

    public Integer getSeqProcedimento() {
        return seqProcedimento;
    }

    public void setSeqProcedimento(Integer seqProcedimento) {
        this.seqProcedimento = seqProcedimento;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }
}
