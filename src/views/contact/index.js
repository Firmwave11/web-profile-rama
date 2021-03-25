import React, {useState} from 'react';
import { 
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import Layout from 'src/layouts/index';

const useStyles = makeStyles((theme) => ({
  type:{
    color:"#999999"
  }
}))

const Contact = () =>{
  const classes = useStyles()
  return (
    <Layout
    navTitle="Contact Me"
    title="CONTACT ME"
    subString="Contact Me"
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
export default Contact;