import { Routes, Route } from 'react-router-dom';
import './App.css';
import Fornecedores from './Pages/Fornecedores/fornecedores';
import Home from './Pages/Home/home';
import Produtos from './Pages/Produtos/produtos';
import Tipos from './Pages/Tipos/tipos';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fornecedores" element={<Fornecedores />} />
        <Route path="/tipos-produtos" element={<Tipos />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </>
  );
}

export default App;
