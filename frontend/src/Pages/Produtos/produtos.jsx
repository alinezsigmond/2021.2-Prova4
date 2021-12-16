import { useEffect, useState } from "react";
import Produto from "../../Components/Produto/produto";
import api from "../../services/api";

export default function Produtos() {
    const [results, setResults] = useState([])

    useEffect(() => {
        api.get('/produtos').then(response => setResults(response.data));
    }, []);

    return(
        <>
         { results.length !== 0 
                ?
                results.map(post => (
                    <Produto
                        id={post.id}
                        nome={post.nome}
                        qtd={post.quantidade}
                        compra={post.precoCompra}
                        venda={post.precoVenda}
                        tipo={post.tipoProduto.categoria}
                        fornecedor={post.fornecedor.nome}
                    />
                ))
                :
                <p>Nenhum fornecedor encontrado</p>
            }
        </>
    )
}