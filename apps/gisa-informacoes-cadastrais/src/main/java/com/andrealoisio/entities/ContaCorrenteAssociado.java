package com.andrealoisio.entities;

import java.math.BigDecimal;
import java.sql.Date;

public class ContaCorrenteAssociado {
    private int codigo;
    private int matricula_associado;
    private java.math.BigDecimal saldo_devedor;
    private String situacao;
    private java.sql.Date data_registro;
    private java.sql.Date data_admissao;

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public int getMatricula_associado() {
        return matricula_associado;
    }

    public void setMatricula_associado(int matricula_associado) {
        this.matricula_associado = matricula_associado;
    }

    public BigDecimal getSaldo_devedor() {
        return saldo_devedor;
    }

    public void setSaldo_devedor(BigDecimal saldo_devedor) {
        this.saldo_devedor = saldo_devedor;
    }

    public String getSituacao() {
        return situacao;
    }

    public void setSituacao(String situacao) {
        this.situacao = situacao;
    }

    public Date getData_registro() {
        return data_registro;
    }

    public void setData_registro(Date data_registro) {
        this.data_registro = data_registro;
    }

    public Date getData_admissao() {
        return data_admissao;
    }

    public void setData_admissao(Date data_admissao) {
        this.data_admissao = data_admissao;
    }
}
