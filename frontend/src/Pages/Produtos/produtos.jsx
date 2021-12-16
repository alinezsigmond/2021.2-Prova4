import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Produto from "../../Components/Produto/produto";
import api from "../../services/api";
import { CreateProduto } from "./createProduto";
import { EditEstoque } from "./editEstoque";
import { ModifyProduto } from "./editProduto";

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
        <CreateProduto />
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
                    <ModifyProduto produto={post} />
                    <EditEstoque produto={post} />
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