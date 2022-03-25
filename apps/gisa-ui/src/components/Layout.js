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
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return(
        <Container>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <header>
                <Paper elevation={3} style={{ padding: '20px' }}>
                I'm a header
                </Paper>
            </header>
            </Grid>

            <Grid item xs={12}>
            <nav>
                <Paper elevation={3} style={{ padding: '20px' }}>
                I'm a nav
                </Paper>
            </nav>
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
                <div>I'm a article</div>
                {/* <Home /> */}
                <DataTable />
                {/* <MainContent /> */}
                </Paper>
            </article>
            </Grid>

            <Grid item xs={12}>
            <article>
                <Paper elevation={3} style={{ padding: '20px' }}>
                I'm a footer
                </Paper>
            </article>
            </Grid>
        </Grid>
        </Container>
    )
}