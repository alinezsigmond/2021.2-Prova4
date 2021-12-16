import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Fornecedor from "../../Components/Fornecedor/fornecedor";
import api from '../../services/api'

export default function Fornecedores() {
    const [results, setResults] = useState([])

    useEffect(() => {
        api.get('/fornecedores').then(response => setResults(response.data));
    }, []);

    // DELETE
    const deleta = (id) => {
        api.delete(`http://localhost:8080/api/fornecedores/${id}`).then(function (response) {
          if(response.status === 200) {
            alert("Fornecedor deletado com sucesso")
          }
        })
    }

    return(
        <>
        { results.length !== 0 
            ?
            results.map(post => (
                <>
                <Fornecedor
                    id={post.id}
                    nome={post.nome}
                />
                <Button onClick={() => alert("edita ae se tu é bom")} sx={{marginLeft: '37%'}}>Editar</Button>
                <Button onClick={() => deleta(post.id)}>Deletar</Button>
                <p style={{marginBottom: '5%'}}></p>
                </>
            ))
            :
            <p>Nenhum fornecedor encontrado</p>
        }
            
        </>
    )
}