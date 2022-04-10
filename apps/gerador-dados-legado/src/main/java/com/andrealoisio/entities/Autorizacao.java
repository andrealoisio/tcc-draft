package com.andrealoisio.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Autorizacao extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo", nullable = false)
    private Integer codigo;
    @Column(name = "seq_atendimento")
    private Integer seqAtendimento;
    @Column(name = "data_registro")
    private java.sql.Date dataRegistro;
    @Column(name = "data_entrada")
    private java.sql.Date dataEntrada;
    @Column(name = "data_aprovacao")
    private java.sql.Date dataAprovacao;
    @Column(name = "data_vencimento")
    private java.sql.Date dataVencimento;
    @Column(name = "data_validade")
    private java.sql.Date dataValidade;
    @Column(name = "tipo_autorizacao")
    private String tipoAutorizacao;
    @Column(name = "esta_pago")
    private boolean estaPago;
    @Column(name = "nome_aprovador")
    private String nomeAprovador;
    @Column(name = "telefone_aprovador")
    private String telefoneAprovador;
    @Column(name = "codigo_aprovador")
    private Integer codigoAprovador;
    private String situacao;
    private String observacao;

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public Integer getSeqAtendimento() {
        return seqAtendimento;
    }

    public void setSeqAtendimento(Integer seqAtendimento) {
        this.seqAtendimento = seqAtendimento;
    }

    public Date getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(Date dataRegistro) {
        this.dataRegistro = dataRegistro;
    }
    public void setDataRegistro(java.util.Date dataRegistro) {
        this.dataRegistro = new java.sql.Date(dataRegistro.getTime());
    }

    public Date getDataEntrada() {
        return dataEntrada;
    }

    public void setDataEntrada(Date dataEntrada) {
        this.dataEntrada = dataEntrada;
    }
    public void setDataEntrada(java.util.Date dataEntrada) {
        this.dataEntrada = new java.sql.Date(dataEntrada.getTime());
    }

    public Date getDataAprovacao() {
        return dataAprovacao;
    }

    public void setDataAprovacao(Date dataAprovacao) {
        this.dataAprovacao = dataAprovacao;
    }
    public void setDataAprovacao(java.util.Date dataAprovacao) {
        this.dataAprovacao = new java.sql.Date(dataAprovacao.getTime());
    }

    public Date getDataVencimento() {
        return dataVencimento;
    }

    public void setDataVencimento(Date dataVencimento) {
        this.dataVencimento = dataVencimento;
    }
    public void setDataVencimento(java.util.Date dataVencimento) {
        this.dataVencimento = new java.sql.Date(dataVencimento.getTime());
    }
    public Date getDataValidade() {
        return dataValidade;
    }

    public void setDataValidade(Date dataValidade) {
        this.dataValidade = dataValidade;
    }
    public void setDataValidade(java.util.Date dataValidade) {
        this.dataValidade = new java.sql.Date(dataValidade.getTime());
    }

    public String getTipoAutorizacao() {
        return tipoAutorizacao;
    }

    public void setTipoAutorizacao(String tipoAutorizacao) {
        this.tipoAutorizacao = tipoAutorizacao;
    }

    public boolean isEstaPago() {
        return estaPago;
    }

    public void setEstaPago(boolean estaPago) {
        this.estaPago = estaPago;
    }

    public String getNomeAprovador() {
        return nomeAprovador;
    }

    public void setNomeAprovador(String nomeAprovador) {
        this.nomeAprovador = nomeAprovador;
    }

    public String getTelefoneAprovador() {
        return telefoneAprovador;
    }

    public void setTelefoneAprovador(String telefoneAprovador) {
        this.telefoneAprovador = telefoneAprovador;
    }

    public Integer getCodigoAprovador() {
        return codigoAprovador;
    }

    public void setCodigoAprovador(Integer codigoAprovador) {
        this.codigoAprovador = codigoAprovador;
    }

    public String getSituacao() {
        return situacao;
    }

    public void setSituacao(String situacao) {
        this.situacao = situacao;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }
}
