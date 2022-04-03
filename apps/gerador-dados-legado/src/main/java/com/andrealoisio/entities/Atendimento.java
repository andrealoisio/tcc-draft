package com.andrealoisio.entities;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
public class Atendimento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq_atendimento", nullable = false)
    private int seqAtendimento;
    @Column(name = "data_atendimento")
    private java.sql.Date dataAtendimento;
    @Column(name = "data_registro")
    private java.sql.Date dataRegistro;
    private String situacao;
    private String tipo;
    private java.math.BigDecimal custo;
    private String cid;
    @Column(name = "seq_associado")
    private int seqAssociado;
    @Column(name = "codigo_prestador")
    private int codigoPrestador;
    @Column(name = "seq_conveniado")
    private int seqConveniado;
    @Column(name = "codigo_autorizacao")
    private int codigoAutorizacao;
    @Column(name = "seq_remocao")
    private int seqRemocao;
    @Column(name = "seq_procedimento")
    private int seqProcedimento;
    private String observacao;

    public int getSeqAtendimento() {
        return seqAtendimento;
    }

    public void setSeqAtendimento(int seqAtendimento) {
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

    public int getSeqAssociado() {
        return seqAssociado;
    }

    public void setSeqAssociado(int seqAssociado) {
        this.seqAssociado = seqAssociado;
    }

    public int getCodigoPrestador() {
        return codigoPrestador;
    }

    public void setCodigoPrestador(int codigoPrestador) {
        this.codigoPrestador = codigoPrestador;
    }

    public int getSeqConveniado() {
        return seqConveniado;
    }

    public void setSeqConveniado(int seqConveniado) {
        this.seqConveniado = seqConveniado;
    }

    public int getCodigoAutorizacao() {
        return codigoAutorizacao;
    }

    public void setCodigoAutorizacao(int codigoAutorizacao) {
        this.codigoAutorizacao = codigoAutorizacao;
    }

    public int getSeqRemocao() {
        return seqRemocao;
    }

    public void setSeqRemocao(int seqRemocao) {
        this.seqRemocao = seqRemocao;
    }

    public int getSeqProcedimento() {
        return seqProcedimento;
    }

    public void setSeqProcedimento(int seqProcedimento) {
        this.seqProcedimento = seqProcedimento;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }
}
