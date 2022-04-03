package com.andrealoisio.entities;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity(name = "pagamentos_recebidos")
public class PagamentosRecebidos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq_pagamento", nullable = false)
    private int seqPagamento;
    @Column(name = "matricula_associado")
    private int matriculaAssociado;
    private int banco;
    private int agencia;
    private int conta;
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

    public int getSeqPagamento() {
        return seqPagamento;
    }

    public void setSeqPagamento(int seqPagamento) {
        this.seqPagamento = seqPagamento;
    }

    public int getMatriculaAssociado() {
        return matriculaAssociado;
    }

    public void setMatriculaAssociado(int matriculaAssociado) {
        this.matriculaAssociado = matriculaAssociado;
    }

    public int getBanco() {
        return banco;
    }

    public void setBanco(int banco) {
        this.banco = banco;
    }

    public int getAgencia() {
        return agencia;
    }

    public void setAgencia(int agencia) {
        this.agencia = agencia;
    }

    public int getConta() {
        return conta;
    }

    public void setConta(int conta) {
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
