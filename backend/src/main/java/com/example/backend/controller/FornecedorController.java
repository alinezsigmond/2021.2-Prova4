package com.example.backend.controller;

import com.example.backend.model.Fornecedor;
import com.example.backend.service.FornecedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/fornecedores")
public class FornecedorController {

    private FornecedorService service;

    public FornecedorController(FornecedorService service){
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Fornecedor>> listAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @PostMapping
    public ResponseEntity<Fornecedor> save(@RequestBody Fornecedor fornecedor) {
        return new ResponseEntity<>(service.save(fornecedor), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public  ResponseEntity<Fornecedor> update(@PathVariable UUID id, @RequestBody Fornecedor fornecedor) throws Exception {
        return new ResponseEntity(service.update(id, fornecedor), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable("id")UUID id) {
        return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
    }

}
