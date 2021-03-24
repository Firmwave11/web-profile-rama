import React,{useState} from 'react';
import { 
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Container,
  colors,
  Grid,
  Typography
} from '@material-ui/core';
import { fade } from "@material-ui/core/styles/colorManipulator";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import social from '../../data/socialLink';

const useStyles = makeStyles((theme) => ({
  icon:{
    color:"white",
    textTransform:'none',
    "&:hover": {
      color:colors.lightBlue[400],
      backgroundColor: fade(colors.lightBlue[400], theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  copyRight:{
    float:"left",
    paddingTop:2,
    fontSize:13,
    color:"#999999"
  }
}));

const BottomBar = () =>{
  const classes = useStyles()

  const icon = (
    <>
      {social.map((item)=>
      <IconButton key={item.href}  href={item.href} target="_blank" rel="noopener noreferrer" color="inherit" className={classes.icon}>
        <item.icon />
      </IconButton>
      )}
    </>
  )
  
  return(
    <AppBar position="fixed" color="primary" className={classes.appBar} elevation={0}>
      <Container maxWidth={false}>
        <Toolbar>
          <Hidden smDown>
            <Typography className={classes.copyRight}>
              © Copyright Rama Sapto P - All right reserved
            </Typography>
            <div className={classes.grow} />
              {icon}
          </Hidden>
          <Hidden mdUp>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {icon}
            </Grid>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default BottomBar;