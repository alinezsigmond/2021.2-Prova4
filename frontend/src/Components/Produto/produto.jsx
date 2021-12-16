import { Container, Info, Name, Id } from "./style"

export default function Produto(props) {

    return(
        <Container>
            <Id name='id' data-testid='id'>ID: {props.id}</Id>
            <Name name='nome'>Nome: {props.nome}</Name>
            <Info name='qtd'>Quantidade em estoque: {props.qtd}</Info>
            <Info name='compra'>Preço de compra: R$ {props.compra}</Info>
            <Info name='venda'>Preço de venda: R$ {props.venda}</Info>
            <Info name='tipo'>Tipo de produto: {props.tipo}</Info>
            <Info name='fornecedor'>Fornecedor: {props.fornecedor}</Info>
        </Container>
    )
}