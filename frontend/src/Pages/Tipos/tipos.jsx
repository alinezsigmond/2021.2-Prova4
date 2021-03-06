import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Tipo from "../../Components/Tipo/tipo";
import api from "../../services/api";
import { CreateTipo } from "./createTipo";
import { ModifyModal } from "./editModal";

export default function Tipos() {
    const [results, setResults] = useState([])

    useEffect(() => {
        api.get('/tipos').then(response => setResults(response.data));
    }, []);

    // DELETE
    const deleta = (id) => {
        api.delete(`http://localhost:8080/api/tipos/${id}`).then(function (response) {
          if(response.status === 200) {
            alert("Tipo de produto deletado com sucesso")
          } 
        })
    }

    return(
        <>
        <CreateTipo />
         { results.length !== 0 
                ?
                results.map(post => (
                    <>
                    <Tipo
                        id={post.id}
                        nome={post.categoria}
                    />
                    <ModifyModal tipo={post} />
                    <Button onClick={() => deleta(post.id)}>Deletar</Button>
                    <p style={{marginBottom: '5%'}}></p>
                    </>
                ))
                :
                <p>Nenhum tipo de produto encontrado</p>
            }
        </>
    )
}