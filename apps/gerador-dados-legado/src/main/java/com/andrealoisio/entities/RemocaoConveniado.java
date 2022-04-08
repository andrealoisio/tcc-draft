package com.andrealoisio.entities;

import javax.persistence.*;

@Entity(name = "remocao_conveniado")
public class RemocaoConveniado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq_remocao_conveniado", nullable = false)
    private Integer seqRemocaoConveniado;
    @Column(name = "seq_remocao")
    private Integer seqRemocao;
    @Column(name = "seq_conveniado")
    private Integer seqConveniado;
    @Column(name = "ind_origem_destino")
    private String indOrigemDestino;

    public Integer getSeqRemocaoConveniado() {
        return seqRemocaoConveniado;
    }

    public void setSeqRemocaoConveniado(Integer seqRemocaoConveniado) {
        this.seqRemocaoConveniado = seqRemocaoConveniado;
    }

    public Integer getSeqRemocao() {
        return seqRemocao;
    }

    public void setSeqRemocao(Integer seqRemocao) {
        this.seqRemocao = seqRemocao;
    }

    public Integer getSeqConveniado() {
        return seqConveniado;
    }

    public void setSeqConveniado(Integer seqConveniado) {
        this.seqConveniado = seqConveniado;
    }

    public String getIndOrigemDestino() {
        return indOrigemDestino;
    }

    public void setIndOrigemDestino(String indOrigemDestino) {
        this.indOrigemDestino = indOrigemDestino;
    }
}
