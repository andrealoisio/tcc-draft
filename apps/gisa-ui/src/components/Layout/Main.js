import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AsideMenu from './AsideMenu';
import Header from './Header';
import Footer from './Footer';
import Rotas from '../Rotas';

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
                    <AsideMenu />
                </Paper>
            </aside>
            </Grid>

            <Grid item xs={12} md={9}>
            <article>
                <Paper elevation={3} style={{ padding: '20px'}}>
                    <Rotas />
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