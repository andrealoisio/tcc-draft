package com.andrealoisio.entities;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity(name = "conta_corrente_associado")
public class ContaCorrenteAssociado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo", nullable = false)
    private int codigo;
    @Column(name = "matricula_associado")
    private int matriculaAssociado;
    @Column(name = "saldo_devedor")
    private java.math.BigDecimal saldoDevedor;
    private String situacao;
    @Column(name = "data_registro")
    private java.sql.Date dataRegistro;
    @Column(name = "data_admissao")
    private java.sql.Date dataAdmissao;

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public int getMatriculaAssociado() {
        return matriculaAssociado;
    }

    public void setMatriculaAssociado(int matriculaAssociado) {
        this.matriculaAssociado = matriculaAssociado;
    }

    public BigDecimal getSaldoDevedor() {
        return saldoDevedor;
    }

    public void setSaldoDevedor(BigDecimal saldoDevedor) {
        this.saldoDevedor = saldoDevedor;
    }

    public String getSituacao() {
        return situacao;
    }

    public void setSituacao(String situacao) {
        this.situacao = situacao;
    }

    public Date getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(Date dataRegistro) {
        this.dataRegistro = dataRegistro;
    }

    public Date getDataAdmissao() {
        return dataAdmissao;
    }

    public void setDataAdmissao(Date dataAdmissao) {
        this.dataAdmissao = dataAdmissao;
    }
}
