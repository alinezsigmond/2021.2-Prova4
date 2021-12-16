package com.example.backend.controller;

import com.example.backend.model.TipoProduto;
import com.example.backend.service.TipoProdutoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("api/tipos")
public class TipoProdutoController {

    private TipoProdutoService service;

    public TipoProdutoController(TipoProdutoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<TipoProduto>> listAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @PostMapping
    public ResponseEntity<TipoProduto> save(@RequestBody TipoProduto tipoProduto) {
        return new ResponseEntity<>(service.save(tipoProduto), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TipoProduto> update(@PathVariable UUID id, @RequestBody TipoProduto tipoProduto) throws Exception {
        return new ResponseEntity(service.update(id, tipoProduto), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable("id")UUID id) {
        return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
    }
}
