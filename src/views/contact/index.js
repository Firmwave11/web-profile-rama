import React, {useState} from 'react';
import { 
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import Layout from 'src/layouts/index';
import ContactForm from './contact';

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
      <Grid 
      container 
      spacing={10}
      style={{
        marginTop:20
      }}
      >
        <Grid item lg={12} sm={12} xs={12}>
          <ContactForm/>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default Contact;