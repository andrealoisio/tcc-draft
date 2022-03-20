package com.andrealoisio.entities;

import org.postgresql.geometric.PGpoint;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Prestador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo", nullable = false)
    private int codigo;
    private String nome;
    private String email;
    private String cpf;
    private String cnpj;
    private String especializacao;
    @Column(name = "data_registro")
    private java.sql.Date data_registro;
    private String telefone;
    private String celular;
    @Column(name = "seq_formacao")
    private int seq_formacao;
    @Column(name = "nome_endereco")
    private String nome_endereco;
    private String bairro;
    private String cidade;
    private String uf;
    private String cep;
    private int banco;
    private int agencia;
    private int conta;
    // todo: Verificar formato
    @Column(columnDefinition = "bytea")
    private PGpoint coordenadas;

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getEspecializacao() {
        return especializacao;
    }

    public void setEspecializacao(String especializacao) {
        this.especializacao = especializacao;
    }

    public Date getData_registro() {
        return data_registro;
    }

    public void setData_registro(Date data_registro) {
        this.data_registro = data_registro;
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

    public int getSeq_formacao() {
        return seq_formacao;
    }

    public void setSeq_formacao(int seq_formacao) {
        this.seq_formacao = seq_formacao;
    }

    public String getNome_endereco() {
        return nome_endereco;
    }

    public void setNome_endereco(String nome_endereco) {
        this.nome_endereco = nome_endereco;
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

    public PGpoint getCoordenadas() {
        return coordenadas;
    }

    public void setCoordenadas(PGpoint coordenadas) {
        this.coordenadas = coordenadas;
    }
}
