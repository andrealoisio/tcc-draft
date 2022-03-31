import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MainContent from './MainContent';
import './App.css';
import IconMenu from './IconMenu';
import DataTable from './DataTable';
import Home from './Home';
import Header from './Layout/Header';
import { Routes, Route } from "react-router-dom";
import Footer from './Layout/Footer';
import ConveniadoForm from './Conveniados/ConveniadoForm';
import DetalheConveniados from './Conveniados/DetalheConveniados';


export default function Main() {
    return(
        <Container>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <header>
                <Paper elevation={3} style={{ padding: '20px' , height: 150, maxWidth: '100%'}} >
                    <Header />
                </Paper>
            </header>
            </Grid>

            <Grid item xs={12} md={3}>
            <aside>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <IconMenu />
                </Paper>
            </aside>
            </Grid>

            <Grid item xs={12} md={9}>
            <article>
                <Paper elevation={3} style={{ padding: '20px'}}>
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="home" element={<Home />} />
                        <Route path="datatable" element={<DataTable />} />
                        <Route path="form" element={<ConveniadoForm />} />
                        <Route path="detalheConveniados/:id" element={<DetalheConveniados />} />

                    </Routes>
                </Paper>
            </article>
            </Grid>

            <Grid item xs={12}>
            <article>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Footer />
                </Paper>
            </article>
            </Grid>
        </Grid>
        </Container>
    )
}