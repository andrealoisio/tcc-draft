package com.andrealoisio.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Autorizacao extends PanacheEntityBase {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo", nullable = false)
    private Integer codigo;
    @Column(name = "seq_atendimento")
    @JsonProperty("seq_atendimento")
    private Integer seqAtendimento;
    @Column(name = "data_registro")
    @JsonProperty("data_registro")
    private java.sql.Date dataRegistro;
    @Column(name = "data_entrada")
    @JsonProperty("data_entrada")
    private java.sql.Date dataEntrada;
    @Column(name = "data_aprovacao")
    @JsonProperty("data_aprovacao")
    private java.sql.Date dataAprovacao;
    @Column(name = "data_vencimento")
    @JsonProperty("data_vencimento")
    private java.sql.Date dataVencimento;
    @Column(name = "data_validade")
    @JsonProperty("data_validade")
    private java.sql.Date dataValidade;
    @Column(name = "tipo_autorizacao")
    @JsonProperty("tipo_autorizacao")
    private String tipoAutorizacao;
    @Column(name = "esta_pago")
    @JsonProperty("esta_pago")
    private boolean estaPago;
    @Column(name = "nome_aprovador")
    @JsonProperty("nome_aprovador")
    private String nomeAprovador;
    @Column(name = "telefone_aprovador")
    @JsonProperty("telefone_aprovador")
    private String telefoneAprovador;
    @Column(name = "codigo_aprovador")
    @JsonProperty("codigo_aprovador")
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

    public Date getDataEntrada() {
        return dataEntrada;
    }

    public void setDataEntrada(Date dataEntrada) {
        this.dataEntrada = dataEntrada;
    }

    public Date getDataAprovacao() {
        return dataAprovacao;
    }

    public void setDataAprovacao(Date dataAprovacao) {
        this.dataAprovacao = dataAprovacao;
    }

    public Date getDataVencimento() {
        return dataVencimento;
    }

    public void setDataVencimento(Date dataVencimento) {
        this.dataVencimento = dataVencimento;
    }

    public Date getDataValidade() {
        return dataValidade;
    }

    public void setDataValidade(Date dataValidade) {
        this.dataValidade = dataValidade;
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
