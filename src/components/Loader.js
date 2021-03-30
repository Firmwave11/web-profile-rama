import { 
  makeStyles,
  Box,
  Container,
  Grid,
  colors,
  Typography,
  Link,
  Breadcrumbs,
  Hidden
} from '@material-ui/core';
import Typed from "react-typed";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    backgroundColor:theme.palette.primary.main
  },
  container:{
    padding:"4% 8%",
  },
  content:{
    marginTop:0,
  },
  startedContent:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    height:"100vh",
  },

}))

const Loader = () =>{
  const classes = useStyles()
  return(
    <div className={classes.root}>
    <Container disableGutters className={classes.container} maxWidth={false}>
      <div className={classes.content}>
        <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
        >
          <Grid 
          item 
          lg={12}
          sm={12}
          xs={12}
          >
            <div className={classes.startedContent}>
              <Typography color="textSecondary">
                <Typed
                  strings={["Loading..."]}
                  typeSpeed={10}
                  backSpeed={30}
                  loop
                />
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  </div>
  )
}

export default Loader;