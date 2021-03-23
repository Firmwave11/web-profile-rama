import React from 'react';
import { 
  makeStyles,
  Box,
  Container,
} from '@material-ui/core';
import Navbar from './navbar/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    backgroundColor:theme.palette.primary.main
  },
  container:{
    padding:"4% 5%"
  },
  content:{
    marginTop:0,
  },
}))

const Layout = ({
  children
}) =>{
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.root}>
      <Container disableGutters className={classes.container} maxWidth={false}>
        <Navbar/>
        <div className={classes.content}>
            <Box my={3}>
              {children}
            </Box>
        </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Layout;