package com.example.backend.repository;

import com.example.backend.model.TipoProduto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface TipoProdutoRepository extends JpaRepository<TipoProduto, UUID> {
}
