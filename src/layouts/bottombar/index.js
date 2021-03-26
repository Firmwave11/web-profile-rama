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
  Typography,
  Link,
  Tooltip
} from '@material-ui/core';
import { fade } from "@material-ui/core/styles/colorManipulator";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import social from 'src/data/socialLink';

const useStyles = makeStyles((theme) => ({
  icon:{
    color:colors.grey[300],
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
  iconNight:{
    color:colors.grey[300],
    textTransform:'none',
    "&:hover": {
      color:colors.yellow[400],
      backgroundColor: fade(colors.yellow[400], theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }
  },
  link:{
    "& .MuiLink-underline:hover":{
      textDecoration:"none !important"
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
  },
  container:{
    padding:"2px 8%"
  },
}));

const BottomBar = () =>{
  const classes = useStyles()

  const icon = (
    <>
      {social.map((item)=>
      <Tooltip key={item.href} title={item.title}>
        <IconButton   href={item.href} target="_blank" rel="noopener noreferrer" color="inherit" className={classes.icon}>
          <item.icon />
        </IconButton>
      </Tooltip>
      )}
    </>
  )
  
  return(
    <AppBar position="fixed" color="primary" className={classes.appBar} elevation={0} >
      <Container className={classes.container} disableGutters maxWidth={false}>
        <Toolbar disableGutters>
          <Hidden smDown>
            <Typography className={classes.copyRight}>
              © Built at 
            </Typography>
            <Tooltip title="Night">
            <IconButton  className={classes.iconNight}>
              <NightsStayIcon/>
            </IconButton>
            </Tooltip>
            <Typography className={classes.copyRight}>
             by&nbsp;
            </Typography>
            <Link href="https://github.com/Firmwave11/web-profile-rama" target="_blank" rel="noopener noreferrer" color="inherit" className={classes.link}  >
              <Typography className={clsx(classes.icon,classes.copyRight)}>
                Rama Sapto Pamungkas
              </Typography>
            </Link>
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