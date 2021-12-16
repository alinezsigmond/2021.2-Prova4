package com.example.backend.util;

import com.example.backend.model.Fornecedor;
import com.example.backend.model.Produto;
import com.example.backend.model.TipoProduto;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class ProdutoCreator {

    public static Produto produtoCreator() {
        Produto produto = new Produto();
        Fornecedor fornecedor = new Fornecedor(UUID.randomUUID(), "Fornecedor Teste");
        TipoProduto tipo = new TipoProduto(UUID.randomUUID(), "Tipo de teste");
        produto.setId(UUID.randomUUID());
        produto.setNome("Produto de teste");
        produto.setPrecoCompra((float)1.99);
        produto.setPrecoVenda((float)15);
        produto.setFornecedor(fornecedor);
        produto.setTipoProduto(tipo);

        return produto;
    }
}
