import React, {useState} from 'react';
import { 
  makeStyles,
  Grid,
  colors,
  Typography,
  Hidden,
  Avatar
} from '@material-ui/core';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import Typed from "react-typed";
import Layout from 'src/layouts/index';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
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
      spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <GlitchSquiggly onHover={true}>
            <Typography variant="h6">
              About Me
            </Typography>
          </GlitchSquiggly>
        </Grid>
        <Grid item lg={2} md={2}  sm={12} xs={12}>
          <Avatar alt="Remy Sharp" src="/static/logo512.png" className={classes.large} />
        </Grid>
        <Grid item lg={10} md={10} sm={12} xs={12}>
          <Typography paragraph={true}>
          Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, 
          cule dicta iriure at. Ubique maluisset vel te, 
          his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, 
          ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. 
          Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad.
          </Typography>
        </Grid>
        <Grid item lg={2} md={2} sm={2} xs={12}/>
        <Grid item lg={10} md={10} sm={10} xs={12}>
          <Typography paragraph={true}>
          Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, 
          cule dicta iriure at. Ubique maluisset vel te, 
          his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, 
          ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. 
          Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default About;