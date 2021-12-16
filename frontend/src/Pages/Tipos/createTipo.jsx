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

export const CreateTipo = () => {
    const [ open, setOpen ] = useState(false);
    const [nome, setNome] = useState();
  
    const cria = (e) => {
      e.preventDefault();
      const toCreate = {
        categoria: nome
      }
      api.post(`http://localhost:8080/api/tipos`, toCreate).then(function (response) {
      if(response.status === 201) {
        alert("Tipo de produto criado com sucesso");
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
        color: 'white'}} 
        onClick={() => setOpen(true)}
      >Novo</Button>
      <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Paper sx={modalStyle}>      
            <Box component="form" onSubmit={(e) => cria(e)} >
            <Typography sx={{marginBottom: '3%'}} variant="h5" color="initial">
                Cadastro Categoria
            </Typography>
            <TextField sx={{marginBlock: '5%'}} required id="outlined-required" label="Categoria" onChange={(e) => setNome(e.target.value)} />
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