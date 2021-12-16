import { Container, Name, Id } from "./style"

export default function Fornecedor(props) {

    return(
        <Container>
            <Id name='id' data-testid='id'>ID: {props.id}</Id>
            <Name name='nome' id='nome'>Nome: {props.nome}</Name>
        </Container>
    )
}