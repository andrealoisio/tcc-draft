package com.andrealoisio.utils;

import java.util.Random;

public class GeradorTexto {
    public static String retornaStatus(){
        String arr[] = {"Ativo", "Pendente", "Cancelado", "Encerrado"};
        Random random = new Random();
        int randomIndex = random.nextInt(arr.length);
        return arr[randomIndex];
    }
    public static String retornaTipoAtendimento(){
        String arr[] = {"Cirurgia", "Consulta de rotina", "Retorno", "Procedimento não cirurgico", ""};
        Random random = new Random();
        int randomIndex = random.nextInt(arr.length);
        return arr[randomIndex];
    }
}
