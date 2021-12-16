package com.example.backend.util;

import com.example.backend.model.Fornecedor;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class FornecedorCreator {

    public static Fornecedor createFornecedor() {
        Fornecedor fornecedor = new Fornecedor();
        fornecedor.setId(UUID.randomUUID());
        fornecedor.setNome("Fornecedor Teste");

        return fornecedor;
    }
}
