import React, {useState} from 'react';
import { 
  makeStyles,
  Grid,
  colors,
  Typography,
  Hidden
} from '@material-ui/core';
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

const Home = () =>{
  const classes = useStyles()
  const subTitle=(
    <Typography className={classes.type}>
      <Typed
        strings={["Web Developer ", "Based in Jakarta"]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </Typography>
  )
  return (
    <Layout
    navTitle="Home"
    title="RAMA SAPTO"
    subTitle={subTitle}
    heightHome={classes.heightHome}
    >
      <div>

      </div>
    </Layout>
  )
}
export default Home;