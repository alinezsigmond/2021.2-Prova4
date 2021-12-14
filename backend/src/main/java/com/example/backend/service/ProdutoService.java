package com.example.backend.service;

import com.example.backend.model.Produto;
import com.example.backend.repository.ProdutoRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository repository;

    public Produto save(Produto produto) {
        return repository.save(produto);
    }

    public Produto findById(UUID id) {
        Produto produto = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));
        return produto;
    }

    public List<Produto> findAll() {
        List<Produto> produtos = repository.findAll();
        return produtos;
    }

    public Produto update(UUID id, Produto produto) {
        Produto produtoEncontrado = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        produtoEncontrado.setNome(produto.getNome());
        produtoEncontrado.setQuantidade(produto.getQuantidade());
        produtoEncontrado.setPrecoCompra(produto.getPrecoCompra());
        produtoEncontrado.setPrecoVenda(produto.getPrecoVenda());
        produtoEncontrado.setFornecedor(produto.getFornecedor());
        produtoEncontrado.setTipoProduto(produto.getTipoProduto());
        return produtoEncontrado;
    }

    public String delete(UUID id) {
        repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));
        repository.deleteById(id);
        return "Produto deletado com sucesso!";
    }
}
