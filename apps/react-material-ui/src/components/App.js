import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MainContent from './MainContent';
import './App.css';

const App = () => {
  return (
    <div className="app">
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
                I'm a aside
              </Paper>
            </aside>
          </Grid>

          <Grid item xs={12} md={9}>
            <article>
              <Paper elevation={3} style={{ padding: '20px'}}>
                <div>I'm a article</div>
                <MainContent />
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
    </div>
  );
};

export default App;
