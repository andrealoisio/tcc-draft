package com.andrealoisio.entities;

import java.math.BigDecimal;
import java.sql.Date;

public class PagamentosEmitidos {
    private int seq_pagamento;
    private int matricula_associado;
    private int seq_conveniado;
    private int codigo;
    private int banco;
    private int agencia;
    private int conta;
    private java.math.BigDecimal valor;
    private java.math.BigDecimal valor_multa;
    private java.math.BigDecimal valor_juros;
    private java.sql.Date data_pagamento;
    private java.sql.Date data_registro;

    public int getSeq_pagamento() {
        return seq_pagamento;
    }

    public void setSeq_pagamento(int seq_pagamento) {
        this.seq_pagamento = seq_pagamento;
    }

    public int getMatricula_associado() {
        return matricula_associado;
    }

    public void setMatricula_associado(int matricula_associado) {
        this.matricula_associado = matricula_associado;
    }

    public int getSeq_conveniado() {
        return seq_conveniado;
    }

    public void setSeq_conveniado(int seq_conveniado) {
        this.seq_conveniado = seq_conveniado;
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
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

    public BigDecimal getValor_multa() {
        return valor_multa;
    }

    public void setValor_multa(BigDecimal valor_multa) {
        this.valor_multa = valor_multa;
    }

    public BigDecimal getValor_juros() {
        return valor_juros;
    }

    public void setValor_juros(BigDecimal valor_juros) {
        this.valor_juros = valor_juros;
    }

    public Date getData_pagamento() {
        return data_pagamento;
    }

    public void setData_pagamento(Date data_pagamento) {
        this.data_pagamento = data_pagamento;
    }

    public Date getData_registro() {
        return data_registro;
    }

    public void setData_registro(Date data_registro) {
        this.data_registro = data_registro;
    }
}
