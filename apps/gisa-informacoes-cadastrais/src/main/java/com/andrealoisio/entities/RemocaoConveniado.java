package com.andrealoisio.entities;

public class RemocaoConveniado {
    private int seq_remocao_conveniado;
    private int seq_remocao;
    private int seq_conveniado;
    private String ind_origem_destino;

    public int getSeq_remocao_conveniado() {
        return seq_remocao_conveniado;
    }

    public void setSeq_remocao_conveniado(int seq_remocao_conveniado) {
        this.seq_remocao_conveniado = seq_remocao_conveniado;
    }

    public int getSeq_remocao() {
        return seq_remocao;
    }

    public void setSeq_remocao(int seq_remocao) {
        this.seq_remocao = seq_remocao;
    }

    public int getSeq_conveniado() {
        return seq_conveniado;
    }

    public void setSeq_conveniado(int seq_conveniado) {
        this.seq_conveniado = seq_conveniado;
    }

    public String getInd_origem_destino() {
        return ind_origem_destino;
    }

    public void setInd_origem_destino(String ind_origem_destino) {
        this.ind_origem_destino = ind_origem_destino;
    }
}
