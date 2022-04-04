import { Routes, Route } from "react-router-dom";
import ConveniadoForm from './pages/Conveniados/ConveniadoForm';
import AssociadosForm from './pages/Associados/AssociadosForm';
import PrestadoresForm from './pages/Prestadores/PrestadoresForm';
import AtendimentosForm from './pages/Atendimentos/AtendimentosForm';
import DetalheConveniados from './pages/Conveniados/DetalheConveniados';
import DetalheAssociados from './pages/Associados/DetalheAssociados';
import DetalhePrestadores from './pages/Prestadores/DetalhePrestadores';
import DetalheAtendimento from './pages/Atendimentos/DetalheAtendimento';
import Splash from './Splash';

const Rotas = () => {
  return (
    <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="associados" element={<AssociadosForm />} />
        <Route path="conveniados" element={<ConveniadoForm />} />
        <Route path="prestadores" element={<PrestadoresForm />} />
        <Route path="atendimentos" element={<AtendimentosForm />} />
        <Route path="detalheConveniados/:id" element={<DetalheConveniados />} />
        <Route path="detalheAssociados/:matricula" element={<DetalheAssociados />} />
        <Route path="detalhePrestadores/:codigo" element={<DetalhePrestadores />} />
        <Route path="detalheAtendimentos/:seq_atendimento" element={<DetalheAtendimento />} />
    </Routes>
  );
};

export default Rotas;