import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <>
            <h1>Bom dia, meu anjo!</h1>
            <h2>O que desejas?</h2>
            <Link to='/fornecedores'><Button>Fornecedores</Button></Link>
            <Link to='/tipos-produtos'><Button>Tipos de Produtos</Button></Link>
            <Link to='/produtos'><Button>Produtos</Button></Link>
        </>
    )
}