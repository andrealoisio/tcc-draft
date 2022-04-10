package com.andrealoisio.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import org.postgresql.geometric.PGpoint;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
public class Remocao extends PanacheEntityBase {
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq_remocao", nullable = false)
    @JsonProperty("seq_remocao")
    private Integer seqRemocao;
    @Column(name = "data_registro")
    @JsonProperty("data_registro")
    private java.sql.Date dataRegistro;
    @Column(name = "data_remocao")
    @JsonProperty("data_remocao")
    private java.sql.Date dataRemocao;
    private java.math.BigDecimal custo;
    @Column(name = "ind_dificuldade_mobilidade")
    @JsonProperty("ind_dificuldade_mobilidade")
    private boolean indDificuldadeMobilidade;
    @Column(name = "coordenada_origem")
    @JsonProperty("coordenada_origem")
    private PGpoint coordenadaOrigem;
    @Column(name = "coordenada_destino")
    @JsonProperty("coordenada_destino")
    private PGpoint coordenadaDestino;
    @Column(name = "nome_endereco_origem")
    @JsonProperty("nome_endereco_origem")
    private String nomeEnderecoOrigem;
    @Column(name = "bairro_origem")
    @JsonProperty("bairro_origem")
    private String bairroOrigem;
    @Column(name = "cidade_origem")
    @JsonProperty("cidade_origem")
    private String cidadeOrigem;
    @Column(name = "uf_origem")
    @JsonProperty("uf_origem")
    private String ufOrigem;
    @Column(name = "cep_origem")
    @JsonProperty("cep_origem")
    private String cepOrigem;
    @Column(name = "nome_endereco_destino")
    @JsonProperty("nome_endereco_destino")
    private String nomeEnderecoDestino;
    @Column(name = "bairro_destino")
    @JsonProperty("bairro_destino")
    private String bairroDestino;
    @Column(name = "cidade_destino")
    @JsonProperty("cidade_destino")
    private String cidadeDestino;
    @Column(name = "uf_destino")
    @JsonProperty("uf_destino")
    private String ufDestino;
    @Column(name = "cep_destino")
    @JsonProperty("cep_destino")
    private String cepDestino;
    @Column(name = "observacao_destino")
    @JsonProperty("observacao_destino")
    private String observacaoDestino;
    @Column(name = "responsavel_destino")
    @JsonProperty("responsavel_destino")
    private String responsavelDestino;

    public Integer getSeqRemocao() {
        return seqRemocao;
    }

    public void setSeqRemocao(Integer seqRemocao) {
        this.seqRemocao = seqRemocao;
    }

    public Date getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(Date dataRegistro) {
        this.dataRegistro = dataRegistro;
    }
    public void setData_registro(java.util.Date data_registro) {
        this.dataRegistro = new java.sql.Date(data_registro.getTime());
    }

    public Date getDataRemocao() {
        return dataRemocao;
    }

    public void setDataRemocao(Date dataRemocao) {
        this.dataRemocao = dataRemocao;
    }
    public void setData_remocao(java.util.Date data_remocao) {
        this.dataRemocao = new java.sql.Date(data_remocao.getTime());
    }
    public BigDecimal getCusto() {
        return custo;
    }

    public void setCusto(BigDecimal custo) {
        this.custo = custo;
    }

    public boolean isIndDificuldadeMobilidade() {
        return indDificuldadeMobilidade;
    }

    public void setIndDificuldadeMobilidade(boolean indDificuldadeMobilidade) {
        this.indDificuldadeMobilidade = indDificuldadeMobilidade;
    }

    public PGpoint getCoordenadaOrigem() {
        return coordenadaOrigem;
    }

    public void setCoordenadaOrigem(PGpoint coordenadaOrigem) {
        this.coordenadaOrigem = coordenadaOrigem;
    }

    public PGpoint getCoordenadaDestino() {
        return coordenadaDestino;
    }

    public void setCoordenadaDestino(PGpoint coordenadaDestino) {
        this.coordenadaDestino = coordenadaDestino;
    }

    public String getNomeEnderecoOrigem() {
        return nomeEnderecoOrigem;
    }

    public void setNomeEnderecoOrigem(String nomeEnderecoOrigem) {
        this.nomeEnderecoOrigem = nomeEnderecoOrigem;
    }

    public String getBairroOrigem() {
        return bairroOrigem;
    }

    public void setBairroOrigem(String bairroOrigem) {
        this.bairroOrigem = bairroOrigem;
    }

    public String getCidadeOrigem() {
        return cidadeOrigem;
    }

    public void setCidadeOrigem(String cidadeOrigem) {
        this.cidadeOrigem = cidadeOrigem;
    }

    public String getUfOrigem() {
        return ufOrigem;
    }

    public void setUfOrigem(String ufOrigem) {
        this.ufOrigem = ufOrigem;
    }

    public String getCepOrigem() {
        return cepOrigem;
    }

    public void setCepOrigem(String cepOrigem) {
        this.cepOrigem = cepOrigem;
    }

    public String getNomeEnderecoDestino() {
        return nomeEnderecoDestino;
    }

    public void setNomeEnderecoDestino(String nomeEnderecoDestino) {
        this.nomeEnderecoDestino = nomeEnderecoDestino;
    }

    public String getBairroDestino() {
        return bairroDestino;
    }

    public void setBairroDestino(String bairroDestino) {
        this.bairroDestino = bairroDestino;
    }

    public String getCidadeDestino() {
        return cidadeDestino;
    }

    public void setCidadeDestino(String cidadeDestino) {
        this.cidadeDestino = cidadeDestino;
    }

    public String getUfDestino() {
        return ufDestino;
    }

    public void setUfDestino(String ufDestino) {
        this.ufDestino = ufDestino;
    }

    public String getCepDestino() {
        return cepDestino;
    }

    public void setCepDestino(String cepDestino) {
        this.cepDestino = cepDestino;
    }

    public String getObservacaoDestino() {
        return observacaoDestino;
    }

    public void setObservacaoDestino(String observacaoDestino) {
        this.observacaoDestino = observacaoDestino;
    }

    public String getResponsavelDestino() {
        return responsavelDestino;
    }

    public void setResponsavelDestino(String responsavelDestino) {
        this.responsavelDestino = responsavelDestino;
    }
}
