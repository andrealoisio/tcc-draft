package com.andrealoisio.entities;

import java.math.BigDecimal;
import java.sql.Date;

public class Procedimento {
    private int seq_procedimento;
    private String tabela_referencia;
    private java.math.BigDecimal custo;
    private boolean ind_somente_particular;
    private boolean ind_cortesia;
    private java.sql.Date data_registro;
    private String descricao;

    public int getSeq_procedimento() {
        return seq_procedimento;
    }

    public void setSeq_procedimento(int seq_procedimento) {
        this.seq_procedimento = seq_procedimento;
    }

    public String getTabela_referencia() {
        return tabela_referencia;
    }

    public void setTabela_referencia(String tabela_referencia) {
        this.tabela_referencia = tabela_referencia;
    }

    public BigDecimal getCusto() {
        return custo;
    }

    public void setCusto(BigDecimal custo) {
        this.custo = custo;
    }

    public boolean isInd_somente_particular() {
        return ind_somente_particular;
    }

    public void setInd_somente_particular(boolean ind_somente_particular) {
        this.ind_somente_particular = ind_somente_particular;
    }

    public boolean isInd_cortesia() {
        return ind_cortesia;
    }

    public void setInd_cortesia(boolean ind_cortesia) {
        this.ind_cortesia = ind_cortesia;
    }

    public Date getData_registro() {
        return data_registro;
    }

    public void setData_registro(Date data_registro) {
        this.data_registro = data_registro;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
