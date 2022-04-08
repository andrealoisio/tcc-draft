package com.andrealoisio.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import org.postgresql.geometric.PGpoint;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Conveniado extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq_conveniado", nullable = false)
    private Integer seqConveniado;
    private String nome;
    @Column(name = "nome_fantasia")
    private String nomeFantasia;
    private String email;
    private String cnpj;
    private String atividade;
    @Column(name = "data_registro")
    private java.sql.Date dataRegistro;
    private String telefone;
    private String celular;
    @Column(name = "nome_responsavel")
    private String nomeResponsavel;
    @Column(name = "nome_endereco")
    private String nomeEndereco;
    private String bairro;
    private String cidade;
    private String uf;
    private String cep;
    private Integer banco;
    private Integer agencia;
    private Integer conta;
    // todo: Verificar formato
    @Column(columnDefinition = "bytea")
    private PGpoint coordenadas;

    public Integer getSeqConveniado() {
        return seqConveniado;
    }

    public void setSeqConveniado(Integer seqConveniado) {
        this.seqConveniado = seqConveniado;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNomeFantasia() {
        return nomeFantasia;
    }

    public void setNomeFantasia(String nomeFantasia) {
        this.nomeFantasia = nomeFantasia;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getAtividade() {
        return atividade;
    }

    public void setAtividade(String atividade) {
        this.atividade = atividade;
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

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getNomeResponsavel() {
        return nomeResponsavel;
    }

    public void setNomeResponsavel(String nomeResponsavel) {
        this.nomeResponsavel = nomeResponsavel;
    }

    public String getNomeEndereco() {
        return nomeEndereco;
    }

    public void setNomeEndereco(String nomeEndereco) {
        this.nomeEndereco = nomeEndereco;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
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

    public PGpoint getCoordenadas() {
        return coordenadas;
    }

    public void setCoordenadas(PGpoint coordenadas) {
        this.coordenadas = coordenadas;
    }
}
