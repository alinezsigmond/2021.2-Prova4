import { TextField, Button, Typography, Box, Modal, Paper} from "@mui/material";
import { useState } from "react";
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

export const EditEstoque = ({produto}) => {
    const [ open, setOpen ] = useState(false);
    const [ quantidade, setQuantidade ] = useState(produto.quantidade);
  
    const edita = (e) => {
      e.preventDefault();
      const toEdit = {
        quantidade: quantidade
      }
      api.put(`http://localhost:8080/api/produtos/estoque/${produto.id}`, toEdit).then(function (response) {
      if(response.status === 200) {
        alert("Quantidade em estoque editada com sucesso");
        setOpen(false);
      } 
    })
    }
    
    return (
      <>
      <Button sx={{marginLeft: '1%'}} onClick={() => setOpen(true)}>Editar estoque</Button>
      <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Paper sx={modalStyle}>      
            <Box component="form" onSubmit={(e) => edita(e)} >
            <Typography sx={{marginBottom: '3%'}} variant="h5" color="initial">
                Editar estoque
            </Typography>
            <TextField sx={{marginBlock: '5%'}} required id="outlined-required" label="Quantidade em estoque" defaultValue={produto.quantidade} onChange={(e) => setQuantidade(e.target.value)} />
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