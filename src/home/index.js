import React, {useState} from 'react';
import { 
  makeStyles,
  Grid,
  colors,
  Typography,
  Hidden
} from '@material-ui/core';
import Typed from "react-typed";
import Layout from '../layouts/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    backgroundColor:theme.palette.primary.main
  },
  container:{
    padding:"4% 5%"
  },
  content:{
    marginTop:0,
  },
  startedContent:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    height:416,
    opacity: 1,
    visibility: "visible",
    padding: 0,
    margin: 0,
    position: "relative",
  },
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
    title="RAMA SAPTO P"
    subTitle={subTitle}
    >
      <div>

      </div>
    </Layout>
  )
}
export default Home;