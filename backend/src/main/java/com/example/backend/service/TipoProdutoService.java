package com.example.backend.service;

import com.example.backend.model.TipoProduto;
import com.example.backend.repository.TipoProdutoRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Service
public class TipoProdutoService {

    @Autowired
    private TipoProdutoRepository repository;

    public TipoProduto save(TipoProduto tipoProduto) {
        return repository.save(tipoProduto);
    }

    public List<TipoProduto> findAll() {
        List<TipoProduto> tipoProduto = repository.findAll();
        return tipoProduto;
    }

    public TipoProduto update(UUID id, TipoProduto tipoProduto) {
        TipoProduto tipoProdutoEncontrado = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tipo de produto não encontrado"));

        tipoProdutoEncontrado.setCategoria(tipoProduto.getCategoria());
        return tipoProdutoEncontrado;
    }

    public String delete(UUID id) {
        repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tipo de produto não encontrado"));
        repository.deleteById(id);
        return "Tipo de produto deletado com sucesso!";
    }
}
