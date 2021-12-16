package com.example.backend.util;


import com.example.backend.model.TipoProduto;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class TipoCreator {

    public static TipoProduto createTipo() {
        TipoProduto tipo = new TipoProduto();
        tipo.setId(UUID.randomUUID());
        tipo.setCategoria("Teste de tipo de produto");

        return tipo;
    }
}
