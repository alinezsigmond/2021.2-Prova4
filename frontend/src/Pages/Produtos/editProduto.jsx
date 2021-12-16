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

export const ModifyProduto = ({produto}) => {
    const [ open, setOpen ] = useState(false);
    const [id, setId] = useState(produto.id);
    const [nome, setNome] = useState(produto.nome);
    const [compra, setCompra ] = useState(produto.precoCompra);
    const [venda, setVenda ] = useState(produto.precoVenda);
    const [fornecedor, setFornecedor ] = useState(produto.fornecedor.id);
    const [tipo, setTipo ] = useState(produto.tipoProduto.id);
    const [tipos, setTipos ] = useState([]);
    const [fornecedores, setFornecedores ] = useState([]);

    // GET Tipos & Fornecedores
    useEffect(() => {
      api.get('/tipos').then(response => setTipos(response.data));
      api.get('/fornecedores').then(response => setFornecedores(response.data));
  }, []);
  
    const edita = (e) => {
      e.preventDefault();
      const toEdit = {
        id: id,
        nome: nome,
        precoCompra: compra,
        precoVenda: venda,
        fornecedor: {id: fornecedor},
        tipoProduto: {id: tipo}
      }
      api.put(`http://localhost:8080/api/produtos/${produto.id}`, toEdit).then(function (response) {
      if(response.status === 200) {
        alert("Produto editado com sucesso");
        setOpen(false);
      } 
    })
    }
    
    return (
      <>
      <Button sx={{marginLeft: '37%'}} onClick={() => setOpen(true)}>Editar detalhes</Button>
      <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Paper sx={modalStyle}>      
            <Box component="form" onSubmit={(e) => edita(e)} >
            <Typography sx={{marginBottom: '3%'}} variant="h5" color="initial">
                Editar Categoria
            </Typography>
            <TextField sx={{marginBlock: '5%'}} required id="outlined-required" label="Nome" defaultValue={produto.nome} onChange={(e) => setNome(e.target.value)} />
            <TextField sx={{marginBlock: '5%'}} required id="outlined-required" label="Preço de compra:" defaultValue={produto.precoCompra} onChange={(e) => setCompra(e.target.value)} />
            <TextField sx={{marginBlock: '5%'}} required id="outlined-required" label="Preço de venda:" defaultValue={produto.precoVenda} onChange={(e) => setVenda(e.target.value)} />
            <TextField 
              select
              sx={{marginBlock: '5%', width: 223}} 
              required id="outlined-required" 
              label="Fornecedor" 
              defaultValue={fornecedores.find(t => t.id === produto.fornecedor.id)}
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
              defaultValue={tipos.find(t => t.id === produto.tipoProduto.id)}
              onChangeCapture={(e) => setTipo(e.target.value.id)}
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