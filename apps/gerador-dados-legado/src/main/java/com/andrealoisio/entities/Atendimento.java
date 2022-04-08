package com.andrealoisio.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
public class Atendimento extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq_atendimento", nullable = false)
    private Integer seqAtendimento;
    @Column(name = "data_atendimento")
    private java.sql.Date dataAtendimento;
    @Column(name = "data_registro")
    private java.sql.Date dataRegistro;
    private String situacao;
    private String tipo;
    private java.math.BigDecimal custo;
    private String cid;
    @Column(name = "seq_associado")
    private Integer seqAssociado;
    @Column(name = "codigo_prestador")
    private Integer codigoPrestador;
    @Column(name = "seq_conveniado")
    private Integer seqConveniado;
    @Column(name = "codigo_autorizacao")
    private Integer codigoAutorizacao;
    @Column(name = "seq_remocao")
    private Integer seqRemocao;
    @Column(name = "seq_procedimento")
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

    public void setDataAtendimento(java.util.Date dataAtendimento) {
        this.dataAtendimento = new java.sql.Date(dataAtendimento.getTime());
    }
    public void setDataAtendimento(Date dataAtendimento) { this.dataAtendimento = dataAtendimento; }

    public Date getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(java.util.Date dataRegistro) {
        this.dataRegistro = new java.sql.Date(dataRegistro.getTime());
    }
    public void setDataRegistro(Date dataRegistro) { this.dataRegistro = dataRegistro; }

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

    public Integer getCodigoAutorizacao() {
        return codigoAutorizacao;
    }

    public void setCodigoAutorizacao(Integer codigoAutorizacao) {
        this.codigoAutorizacao = codigoAutorizacao;
    }

    public Integer getSeqRemocao() {
        return seqRemocao;
    }

    public void setSeqRemocao(Integer seqRemocao) {
        this.seqRemocao = seqRemocao;
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
