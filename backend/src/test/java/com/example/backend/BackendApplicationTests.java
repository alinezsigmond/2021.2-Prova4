package com.example.backend;

import com.example.backend.model.Fornecedor;
import com.example.backend.repository.FornecedorRepository;
import com.example.backend.service.FornecedorService;
import com.example.backend.util.FornecedorCreator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@SpringBootTest
class BackendApplicationTests {

    @InjectMocks
    private FornecedorService service;

    @Mock
    private FornecedorRepository repository;

    @BeforeEach
    void setUp() {
        when(repository.save(ArgumentMatchers.isA(Fornecedor.class)))
                .thenReturn(FornecedorCreator.createFornecedor());
    }

    @Test
    public void shouldCreateContact() throws Exception {
        Fornecedor fornecedor = service.save(FornecedorCreator.createFornecedor());

        assertThat(fornecedor).isNotNull();
        assertThat("Fornecedor Teste").isEqualTo(fornecedor.getNome());
    }

}
