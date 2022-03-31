import { Routes, Route } from "react-router-dom";
import DataTable from './DataTable';
import Home from './Home';
import ConveniadoForm from './Conveniados/ConveniadoForm';
import GetIdConveniado from './Conveniados/GetIdConveniado';
import MainContent from './MainContent';

const Rotas = () => {
  return (
    <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="home" element={<Home />} />
        <Route path="datatable" element={<DataTable />} />
        <Route path="form" element={<ConveniadoForm />} />
        <Route path="detalheConveniados/:id" element={<GetIdConveniado />} />
    </Routes>
  );
};

export default Rotas;