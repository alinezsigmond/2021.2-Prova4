import React, { useEffect, useState } from "react";
import Fornecedor from "../../Components/Fornecedor/fornecedor";
import api from '../../services/api'

export default function Fornecedores() {
    const [results, setResults] = useState([])

    useEffect(() => {
        api.get('/fornecedores').then(response => setResults(response.data));
    }, []);

    return(
        <>
         { results.length !== 0 
                ?
                results.map(post => (
                    <Fornecedor
                        id={post.id}
                        nome={post.nome}
                    />
                ))
                :
                <p>Nenhum fornecedor encontrado</p>
            }
        </>
    )
}