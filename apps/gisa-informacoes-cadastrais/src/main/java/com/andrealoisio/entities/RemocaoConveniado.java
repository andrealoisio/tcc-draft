package com.andrealoisio.entities;

import javax.persistence.*;

@Entity(name = "remocao_conveniado")
public class RemocaoConveniado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq_remocao_conveniado", nullable = false)
    private int seqRemocaoConveniado;
    @Column(name = "seq_remocao")
    private int seqRemocao;
    @Column(name = "seq_conveniado")
    private int seqConveniado;
    @Column(name = "ind_origem_destino")
    private String indOrigemDestino;

    public int getSeqRemocaoConveniado() {
        return seqRemocaoConveniado;
    }

    public void setSeqRemocaoConveniado(int seqRemocaoConveniado) {
        this.seqRemocaoConveniado = seqRemocaoConveniado;
    }

    public int getSeqRemocao() {
        return seqRemocao;
    }

    public void setSeqRemocao(int seqRemocao) {
        this.seqRemocao = seqRemocao;
    }

    public int getSeqConveniado() {
        return seqConveniado;
    }

    public void setSeqConveniado(int seqConveniado) {
        this.seqConveniado = seqConveniado;
    }

    public String getIndOrigemDestino() {
        return indOrigemDestino;
    }

    public void setIndOrigemDestino(String indOrigemDestino) {
        this.indOrigemDestino = indOrigemDestino;
    }
}
