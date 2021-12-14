package com.example.backend.service;

import com.example.backend.model.Fornecedor;
import com.example.backend.repository.FornecedorRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Service
public class FornecedorService {

    @Autowired
    private FornecedorRepository repository;

    public Fornecedor save(Fornecedor fornecedor){
        return repository.save(fornecedor);
    }

    public List<Fornecedor> findAll() {
        List<Fornecedor> fornecedores = repository.findAll();
        return fornecedores;
    }

    public Fornecedor update(UUID id, Fornecedor fornecedor) {
        Fornecedor fornecedorEncontrado = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Fornecedor não encontrado"));
        fornecedorEncontrado.setNome(fornecedor.getNome());
        repository.save(fornecedorEncontrado);

        return fornecedorEncontrado;
    }

    public String delete(UUID id) {
        repository.findById(id)
                        .orElseThrow(() -> new RuntimeException("Fornecedor não encontrado"));
        repository.deleteById(id);
        return "Fornecedor deletado com sucesso!";
    }
}
