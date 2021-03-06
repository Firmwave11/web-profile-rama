import React, {useState} from 'react';
import { 
  makeStyles,
  Grid,
} from '@material-ui/core';
import Layout from 'src/layouts/index';
import AboutMe from './AboutMe';
import AboutSite from './aboutSite';
import Skill from './Skill';

const useStyles = makeStyles((theme) => ({


}))

const About = () =>{
  const classes = useStyles()
  return (
    <Layout
    navTitle="About"
    title="ABOUT"
    subString="About"
    >
      <Grid 
      container 
      spacing={10}
      style={{
        marginTop:20
      }}
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <AboutMe/>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Skill/>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <AboutSite/>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default About;