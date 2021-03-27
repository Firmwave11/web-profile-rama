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
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import stasMe from 'src/data/statsMe';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  image:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  infoList:{
    marginBottom:10,
    '& .MuiListItem-root':{
      width:'32%',
      display:'inline-block',
      [theme.breakpoints.down('xs')]: {
        display:'flex',
        width:'100%',
        textAlign:'center'
      },
      [theme.breakpoints.up('sm')]: {
        width:'38%',
        display:'inline-block',
      },
      [theme.breakpoints.up('md')]: {
        width:'32%',
        display:'inline-block',
      },
    }

  },
  typhography:{
    [theme.breakpoints.down('xs')]: {
      textAlign:"center"
    },
    '& strong':{
      color:theme.palette.text.secondary
    }
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
            About Me
          </Typography>
        </GlitchSquiggly>
      </Grid>
      <Grid item lg={2} md={2}  sm={12} xs={12} className={classes.image} >
        <Avatar alt="Remy Sharp" src="/static/logo512.png" className={classes.large} />
      </Grid>
      <Grid item lg={10} md={10} sm={12} xs={12} className={classes.typhography}>
        <Typography paragraph={true} >
        Hi, I'm Rama. Currently i'm working as a web developer. I am a University of Pembangunan Nasional Veteran Jakarta graduate.
        I am particularly interested in projects that touch web, mobile, and maybe robotic. 
        If you think I can be helpful to you or would like to meet me, please feel free to get in touch.
        </Typography>
          <List className={classes.infoList}>
            {stasMe.map((item)=>
              <ListItem disableGutters>
                <ListItemText disableTypography  primary={<Typography className={classes.typhography} ><strong>{item.key}: </strong> 	&nbsp;{item.value} </Typography>} />
              </ListItem>
            )}
          </List>
        <Button component="a" href="/cv/_RAMA SAPTO PAMUNGKAS 2020.csv" variant="contained" color="secondary" style={{textTransform:"none"}} download>
          <GlitchClip onHover={true}>
            <Typography >
              Download CV
            </Typography>
          </GlitchClip>
        </Button>
      </Grid>
    </Grid>
  )
}
export default About;