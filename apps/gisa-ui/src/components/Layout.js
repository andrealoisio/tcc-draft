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
import { makeStyles } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import './Layout/w3.css';


const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(32),
        height: theme.spacing(16)
      }
    },
    yellowPaper: {
      backgroundColor: yellow[300]
    },
    customBorder: {
      border: `3px solid ${yellow[200]}`
    },
    customBorderRadius: {
      borderRadius: 25
    }
  }));
export default function Layout() {
    const classes = useStyles();

    return(
        <Container>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <header>
                <Paper elevation={3} style={{ padding: '20px' }} className={classes.yellowPaper}>
                    <div style={{ color: 'red' }} className={"w3-black"}> I'm a header</div>
                    <Header />
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
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="home" element={<Home />} />
                        <Route path="datatable" element={<DataTable />} />
                    </Routes>
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