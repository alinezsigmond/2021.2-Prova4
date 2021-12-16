import { useEffect, useState } from "react";
import Tipo from "../../Components/Tipo/tipo";
import api from "../../services/api";

export default function Tipos() {
    const [results, setResults] = useState([])

    useEffect(() => {
        api.get('/tipos').then(response => setResults(response.data));
    }, []);

    return(
        <>
         { results.length !== 0 
                ?
                results.map(post => (
                    <Tipo
                        id={post.id}
                        nome={post.categoria}
                    />
                ))
                :
                <p>Nenhum fornecedor encontrado</p>
            }
        </>
    )
}