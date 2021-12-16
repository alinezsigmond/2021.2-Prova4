import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Produto from "../../Components/Produto/produto";
import api from "../../services/api";

export default function Produtos() {
    const [results, setResults] = useState([])

    useEffect(() => {
        api.get('/produtos').then(response => setResults(response.data));
    }, []);

    // DELETE
    const deleta = (id) => {
        api.delete(`http://localhost:8080/api/produtos/${id}`).then(function (response) {
          if(response.status === 200) {
            alert("Produto deletado com sucesso")
          } 
        })
    }

    return(
        <>
         { results.length !== 0 
                ?
                results.map(post => (
                    <>
                    <Produto
                        id={post.id}
                        nome={post.nome}
                        qtd={post.quantidade}
                        compra={post.precoCompra}
                        venda={post.precoVenda}
                        tipo={post.tipoProduto.categoria}
                        fornecedor={post.fornecedor.nome}
                    />
                    <Button onClick={() => alert("edita ae se tu é bom")} sx={{marginLeft: '37%'}}>Editar detalhes</Button>
                    <Button onClick={() => alert("edita ae se tu é bom")} sx={{marginLeft: '1%'}}>Editar estoque</Button>
                    <Button onClick={() => deleta(post.id)} sx={{marginLeft: '1%'}}>Deletar</Button>
                    <p style={{marginBottom: '5%'}}></p>
                    </>
                ))
                :
                <p>Nenhum produto encontrado</p>
            }
        </>
    )
}