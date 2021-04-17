import React, {useState} from 'react';
import { 
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import Typed from "react-typed";
import Layout from 'src/layouts/index';

const useStyles = makeStyles((theme) => ({
  type:{
    color:"#999999"
  },
  heightHome:{
    height:"68vh !important"
  }
}))

const Experience = () =>{
  const classes = useStyles()
  return (
    <Layout
    navTitle="Experience"
    title="Still In Development"
    subString="Experience"
    heightHome={classes.heightHome}
    >
      <Grid item lg={12} sm={12} xs={12}>
        <Grid container>
          <Grid item lg={1} sm={1} xs={1}>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default Experience;