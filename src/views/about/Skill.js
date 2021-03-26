import React, {useState} from 'react';
import { 
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';

const useStyles = makeStyles((theme) => ({
  note:{
    fontSize:"0.8rem"
  }
}))

const About = () =>{
  const classes = useStyles()
  return (
    <Grid 
    container 
    spacing={3}
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <GlitchSquiggly onHover={true}>
          <Typography variant="h6">
            Skills 
          </Typography>
        </GlitchSquiggly>
        <Typography className={classes.note}>
        Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills.
        </Typography>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>

      </Grid>
    </Grid>
  )
}
export default About;