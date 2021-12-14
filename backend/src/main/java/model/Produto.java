package model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Produto {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column(nullable = false)
    private String categoria;

    @Column(nullable = false)
    private int quantidade;

    @Column(nullable = false)
    private float precoVenda;

    @Column(nullable = false)
    private float precoCompra;

    @Column(nullable = false)
    private Fornecedor fornecedor;

    @Column(nullable = false)
    private TipoProduto tipoProduto;
}
