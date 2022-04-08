package com.andrealoisio.utils;

import java.util.Random;

public class GeradorTexto {
    public static String retornaTextoAleatorio(String[] arr){
        Random random = new Random();
        int randomIndex = random.nextInt(arr.length);
        return arr[randomIndex];
    }
}
