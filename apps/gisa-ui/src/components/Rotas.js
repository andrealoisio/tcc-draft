import { Routes, Route } from "react-router-dom";
import DataTable from './DataTable';
import ConveniadoForm from './Conveniados/ConveniadoForm';
import AssociadosForm from './Associados/AssociadosForm';
import DetalheConveniados from './Conveniados/DetalheConveniados';
import DetalheAssociados from './Associados/DetalheAssociados';
import MainContent from './MainContent';

const Rotas = () => {
  return (
    <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="associados" element={<AssociadosForm />} />
        <Route path="conveniados" element={<ConveniadoForm />} />
        <Route path="datatable" element={<DataTable />} />
        <Route path="detalheConveniados/:id" element={<DetalheConveniados />} />
        <Route path="detalheAssociados/:matricula" element={<DetalheAssociados />} />
    </Routes>
  );
};

export default Rotas;