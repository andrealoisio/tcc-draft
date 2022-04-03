import { Routes, Route } from "react-router-dom";
import DataTable from './DataTable';
import ConveniadoForm from './Conveniados/ConveniadoForm';
import AssociadosForm from './Associados/AssociadosForm';
import PrestadoresForm from './Prestador/PrestadoresForm';
import DetalheConveniados from './Conveniados/DetalheConveniados';
import DetalheAssociados from './Associados/DetalheAssociados';
import DetalhePrestadores from './Prestador/DetalhePrestadores';
import MainContent from './MainContent';

const Rotas = () => {
  return (
    <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="associados" element={<AssociadosForm />} />
        <Route path="conveniados" element={<ConveniadoForm />} />
        <Route path="prestadores" element={<PrestadoresForm />} />
        <Route path="datatable" element={<DataTable />} />
        <Route path="detalheConveniados/:id" element={<DetalheConveniados />} />
        <Route path="detalheAssociados/:matricula" element={<DetalheAssociados />} />
        <Route path="detalhePrestadores/:codigo" element={<DetalhePrestadores />} />
    </Routes>
  );
};

export default Rotas;