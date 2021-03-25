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
    >
      <div>

      </div>
    </Layout>
  )
}
export default Home;