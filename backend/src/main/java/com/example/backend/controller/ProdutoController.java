package com.example.backend.controller;

import com.example.backend.model.Produto;
import com.example.backend.service.ProdutoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    private ProdutoService service;

    public ProdutoController(ProdutoService service){
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Produto>> listAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @PostMapping
    public ResponseEntity<Produto> save(@RequestBody Produto produto) {
        return new ResponseEntity<>(service.save(produto), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public  ResponseEntity<Produto> update(@PathVariable UUID id, @RequestBody Produto produto) throws Exception {
        return new ResponseEntity(service.update(id, produto), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable("id")UUID id) {
        return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
    }

}