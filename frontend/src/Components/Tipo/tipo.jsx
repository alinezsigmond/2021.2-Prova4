import { Container, Name, Id } from "./style"

export default function Tipo(props) {

    return(
        <Container>
            <Id name='id' data-testid='id'>ID: {props.id}</Id>
            <Name name='nome'>Nome: {props.nome}</Name>
        </Container>
    )
}