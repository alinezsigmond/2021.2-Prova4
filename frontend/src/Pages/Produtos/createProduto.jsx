import { TextField, Button, Typography, Box, Modal, Paper, MenuItem} from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../services/api";

const modalStyle = {
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    position: "absolute",
    left: "50%",
    top: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: 400,
    maxHeight: '80vh',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
  };

export const CreateProduto = () => {
    const [ open, setOpen ] = useState(false);
    const [id, setId] = useState();
    const [nome, setNome] = useState();
    const [compra, setCompra ] = useState();
    const [venda, setVenda ] = useState();
    const [ quantidade, setQuantidade ] = useState();
    const [fornecedor, setFornecedor ] = useState();
    const [tipo, setTipo ] = useState();
    const [tipos, setTipos ] = useState([]);
    const [fornecedores, setFornecedores ] = useState([]);

    // GET Tipos & Fornecedores
    useEffect(() => {
      api.get('/tipos').then(response => setTipos(response.data));
      api.get('/fornecedores').then(response => setFornecedores(response.data));
  }, []);
  
    const cria = (e) => {
      e.preventDefault();
      const toCreate = {
        id: id,
        nome: nome,
        precoCompra: compra,
        precoVenda: venda,
        quantidade: quantidade,
        fornecedor: {id: fornecedor},
        tipoProduto: {id: tipo}
      }
      api.post(`http://localhost:8080/api/produtos/`, toCreate).then(function (response) {
      if(response.status === 201) {
        alert("Produto criado com sucesso");
        setOpen(false);
      } 
    })
    }
    
    return (
      <>
      <Button sx={{marginLeft: '37%'}}
        sx={{backgroundColor: 'green',
        marginLeft: '37.3%',
        '&:hover': {backgroundColor: "#004b06"},
        marginTop: '3%',
        color: 'white'}} onClick={() => setOpen(true)}>Novo</Button>
      <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Paper sx={modalStyle}>      
            <Box component="form" onSubmit={(e) => cria(e)} >
            <Typography sx={{marginBottom: '3%'}} variant="h5" color="initial">
                Novo Produto
            </Typography>
            <TextField sx={{marginBlock: '5%'}} required id="outlined-required" label="Nome" onChange={(e) => setNome(e.target.value)} />
            <TextField sx={{marginBlock: '5%'}} required id="outlined-required" label="Preço de compra:" onChange={(e) => setCompra(e.target.value)} />
            <TextField sx={{marginBlock: '5%'}} required id="outlined-required" label="Preço de venda:" onChange={(e) => setVenda(e.target.value)} />
            <TextField sx={{marginBlock: '5%'}} required id="outlined-required" label="Quantidade em estoque:" onChange={(e) => setQuantidade(e.target.value)} />
            <TextField 
              select
              sx={{marginBlock: '5%', width: 223}} 
              required id="outlined-required" 
              label="Fornecedor" 
              onChange={(e) => setFornecedor(e.target.value.id)} 
            >
              {fornecedores.map((f) => {
                return(
                  <MenuItem key={f.id} value={f}> {f.nome} </MenuItem>
                )
              })}
            </TextField>
            <TextField
              select
              sx={{marginBlock: '5%', width: 223}} 
              required id="outlined-required" 
              label="Tipo" 
              onChange={(e) => setTipo(e.target.value.id)}
            >
              {tipos.map((t) => {
                return(
                  <MenuItem key={t.id} value={t}> {t.categoria} </MenuItem>
                )
              })}
              </TextField>
            <div style={{diplay: 'flex'}} >
                <Button type="submit" variant="contained" color="success" sx={{marginRight: '5%',backgroundColor: "#00939F", '&:hover': {backgroundColor: "#006870"} }}>
                    Salvar
                </Button>
                <Button type="reset" variant="contained" onClick={() => setOpen(false)} sx={{backgroundColor: "#c3c3c3" }}>
                    Cancelar
                </Button>
            </div>
            </Box>
          </Paper>
      </Modal>
      </>
    )
}