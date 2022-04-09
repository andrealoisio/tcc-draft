package com.andrealoisio.utils;

public enum LiteraisAleatorias {
    SITUACAO_ATENDIMENTO(new String[]{"Ativo", "Pendente", "Cancelado", "Encerrado"}),
    TIPO_ATENDIMENTO(new String[] {"Cirurgia", "Consulta de rotina", "Retorno", "Procedimento não cirurgico", "Curativo"}),
    TIPO_AUTORIZACAO(new String[] {"Especial", "Simples", "Pagamento Antecipado"}),
    SITUACAO_AUTORIZACAO(new String[] {"Encaminhado", "Pendente", "Autorizado", "Não Autorizado", "Cancelado"});

    private String[] retornoStrings;
    LiteraisAleatorias(String[] strings) {
        retornoStrings = strings;
    }

    public String[] getRetornoStrings() {
        return retornoStrings;
    }
}