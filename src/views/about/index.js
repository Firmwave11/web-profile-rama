import React, {useState} from 'react';
import { 
  makeStyles,
  Grid,
  colors,
  Typography,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import Layout from 'src/layouts/index';
import AboutMe from './AboutMe';
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
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <AboutMe/>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Skill/>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default About;