package com.andrealoisio.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import org.postgresql.geometric.PGpoint;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Associado extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "matricula")
    private Integer matricula;
    private String nome;
    private String cpf;
    private String email;
    @Column(name = "data_nascimento")
    private java.sql.Date dataNascimento;
    @Column(name = "data_registro")
    private java.sql.Date dataRegistro;
    @Column(name = "is_ativo")
    private boolean isAtivo;
    private String plano;
    private String celular;
    private String telefone;
    @Column(name = "nome_mae")
    private String nomeMae;
    @Column(name = "nome_endereco")
    private String nomeEndereco;
    private String bairro;
    private String cidade;
    private String uf;
    private String cep;
    // todo: verificar formato
    @Column(columnDefinition = "bytea")
    private PGpoint coordenadas;

    public Integer getMatricula() {
        return matricula;
    }

    public void setMatricula(Integer matricula) {
        this.matricula = matricula;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public void setDataNascimento(java.util.Date dataNascimento) {
        this.dataNascimento = new java.sql.Date(dataNascimento.getTime());
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

    public boolean isAtivo() {
        return isAtivo;
    }

    public void setAtivo(boolean ativo) {
        this.isAtivo = ativo;
    }

    public String getPlano() {
        return plano;
    }

    public void setPlano(String plano) {
        this.plano = plano;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getNomeMae() {
        return nomeMae;
    }

    public void setNomeMae(String nomeMae) {
        this.nomeMae = nomeMae;
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

    public PGpoint getCoordenadas() {
        return coordenadas;
    }

    public void setCoordenadas(PGpoint coordenadas) {
        this.coordenadas = coordenadas;
    }
}
