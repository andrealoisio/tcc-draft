package com.andrealoisio.entities;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity(name = "conta_corrente_associado")
public class ContaCorrenteAssociado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo", nullable = false)
    private Integer codigo;
    @Column(name = "matricula_associado")
    @JsonProperty("matricula_associado")
    private Integer matriculaAssociado;
    @Column(name = "saldo_devedor")
    @JsonProperty("saldo_devedor")
    private java.math.BigDecimal saldoDevedor;
    private String situacao;
    @Column(name = "data_registro")
    @JsonProperty("data_registro")
    private java.sql.Date dataRegistro;
    @Column(name = "data_admissao")
    @JsonProperty("data_admissao")
    private java.sql.Date dataAdmissao;

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public Integer getMatriculaAssociado() {
        return matriculaAssociado;
    }

    public void setMatriculaAssociado(Integer matriculaAssociado) {
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
