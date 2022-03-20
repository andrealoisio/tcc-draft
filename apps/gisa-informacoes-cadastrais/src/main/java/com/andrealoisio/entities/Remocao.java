package com.andrealoisio.entities;

public class Remocao {
    private int seq_remocao;
    private int paciente;
    private java.sql.Date data_registro;
    private java.sql.Date data_remocao;
    private java.math.BigDecimal custo;
    private boolean ind_dificuldade_mobilidade;
    // todo: verificar formato
    private String coordenada_origem;
    // todo: verificar formato
    private String coordenada_destino;
    private String nome_endereco_origem;
    private String bairro_origem;
    private String cidade_origem;
    private String uf_origem;
    private String cep_origem;
    private String nome_endereco_destino;
    private String bairro_destino;
    private String cidade_destino;
    private String uf_destino;
    private String cep_destino;
    private String observacao_destino;
    private String responsavel_destino;
}
