package com.example.backend.integration;

import com.example.backend.model.Fornecedor;
import com.example.backend.repository.FornecedorRepository;
import org.assertj.core.api.Assertions;
import org.springframework.boot.test.web.client.TestRestTemplate;
import com.example.backend.util.FornecedorCreator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.DirtiesContext;

import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
public class FornecedorIntegrationTests {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private FornecedorRepository repository;

    @LocalServerPort
    private int port;

    @BeforeEach
    void setUp() {
        repository.deleteAll();
        repository.save(FornecedorCreator.createFornecedor());
    }

    @Test
    public void test_index_size1() {

        Fornecedor fornecedor = new Fornecedor(UUID.randomUUID(), "Fornecedor teste");

        ResponseEntity<Fornecedor[]> exchange =
                testRestTemplate.exchange("/api/fornecedores", HttpMethod.GET, null, Fornecedor[].class);

        Assertions.assertThat(exchange).isNotNull();
        Assertions.assertThat(exchange.getStatusCode()).isEqualTo(HttpStatus.OK);
        Assertions.assertThat(exchange.getBody().length).isEqualTo(1);
    }

//    @Test
//    void shouldFindProviderById() {
//        List<Fornecedor> fornecedores = repository.findAll();
//
//        UUID id = fornecedores.get(0).getId();
//
//        ResponseEntity<Fornecedor> responseEntity =
//                this.testRestTemplate.getForEntity(
//                        "http://localhost:" + port + "/api/fornecedores/" + id, Fornecedor.class);
//
//        Fornecedor fornecedor = responseEntity.getBody();
//
//        assertAll(() -> assertNotNull(fornecedor), () -> assertEquals(id, fornecedor.getId()));
//    }
}
