import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MainContent from './MainContent';
import './App.css';
import IconMenu from './IconMenu';
import DataTable from './DataTable';
import Home from './Home';
// import BoxLayout from './BoxLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';


const App = () => {
  return (
    <div className="app">
      <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="home" element={<Home />} />
          <Route path="datatable" element={<DataTable />} />
      </Routes>
      {/* <BoxLayout /> */}
      
    </div>
  );
};

export default App;
