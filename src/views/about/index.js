import React, {useState} from 'react';
import { 
  makeStyles,
  Grid,
  colors,
  Typography,
  Hidden
} from '@material-ui/core';
import Typed from "react-typed";
import Layout from '../../layouts/index';

const useStyles = makeStyles((theme) => ({
  type:{
    color:"#999999"
  }
}))

const About = () =>{
  const classes = useStyles()
  const subTitle=(
    <Typography className={classes.type}>
      <Typed
        strings={["About Me", "Or", "About This Website"]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </Typography>
  )
  return (
    <Layout
    navTitle="About"
    title="ABOUT"
    subTitle={subTitle}
    >
      <Grid item lg={12} md={12} sm={12}>

      </Grid>
    </Layout>
  )
}
export default About;