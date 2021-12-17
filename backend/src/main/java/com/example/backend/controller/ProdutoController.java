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

    @PutMapping("/estoque/{id}")
    public ResponseEntity<Integer> editEstoque(@PathVariable UUID id, @RequestBody Produto produto) throws Exception {
        return new ResponseEntity(service.editEstoque(id, produto), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public  ResponseEntity<Produto> update(@PathVariable UUID id, @RequestBody Produto produto) throws Exception {
        return new ResponseEntity(service.update(id, produto), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable("id")UUID id) {
        return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
    }

    @PutMapping(path = "/incrementa/{id}")
    public ResponseEntity<String> aumentaEstoque(
            @PathVariable("id") UUID id, @RequestParam("quantidade") int quantidade) {
        return new ResponseEntity<>(service.aumentaEstoque(id, quantidade), HttpStatus.OK);
    }

    @PutMapping(path = "/decrementa/{id}")
    public ResponseEntity<String> diminuiEstoque(
            @PathVariable("id") UUID id, @RequestParam("quantidade") int quantidade) throws Exception {
        return new ResponseEntity<>(service.diminuiEstoque(id, quantidade), HttpStatus.OK);
    }

}
