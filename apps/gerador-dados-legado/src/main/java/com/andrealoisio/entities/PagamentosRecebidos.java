package com.andrealoisio.entities;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity(name = "pagamentos_recebidos")
public class PagamentosRecebidos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq_pagamento", nullable = false)
    private Integer seqPagamento;
    @Column(name = "matricula_associado")
    private Integer matriculaAssociado;
    private Integer banco;
    private Integer agencia;
    private Integer conta;
    private java.math.BigDecimal valor;
    @Column(name = "valor_multa")
    private java.math.BigDecimal valorMulta;
    @Column(name = "valor_juros")
    private java.math.BigDecimal valorJuros;
    @Column(name = "data_pagamento")
    private java.sql.Date dataPagamento;
    @Column(name = "data_registro")
    private java.sql.Date dataRegistro;
    @Column(name = "cpf_titular")
    private String cpfTitular;

    public Integer getSeqPagamento() {
        return seqPagamento;
    }

    public void setSeqPagamento(Integer seqPagamento) {
        this.seqPagamento = seqPagamento;
    }

    public Integer getMatriculaAssociado() {
        return matriculaAssociado;
    }

    public void setMatriculaAssociado(Integer matriculaAssociado) {
        this.matriculaAssociado = matriculaAssociado;
    }

    public Integer getBanco() {
        return banco;
    }

    public void setBanco(Integer banco) {
        this.banco = banco;
    }

    public Integer getAgencia() {
        return agencia;
    }

    public void setAgencia(Integer agencia) {
        this.agencia = agencia;
    }

    public Integer getConta() {
        return conta;
    }

    public void setConta(Integer conta) {
        this.conta = conta;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public BigDecimal getValorMulta() {
        return valorMulta;
    }

    public void setValorMulta(BigDecimal valorMulta) {
        this.valorMulta = valorMulta;
    }

    public BigDecimal getValorJuros() {
        return valorJuros;
    }

    public void setValorJuros(BigDecimal valorJuros) {
        this.valorJuros = valorJuros;
    }

    public Date getDataPagamento() {
        return dataPagamento;
    }

    public void setDataPagamento(Date dataPagamento) {
        this.dataPagamento = dataPagamento;
    }

    public Date getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(Date dataRegistro) {
        this.dataRegistro = dataRegistro;
    }

    public String getCpfTitular() {
        return cpfTitular;
    }

    public void setCpfTitular(String cpfTitular) {
        this.cpfTitular = cpfTitular;
    }
}
