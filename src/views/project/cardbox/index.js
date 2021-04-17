import React, {useState} from 'react';
import { 
  makeStyles,
  useTheme,
  Grid,
  Typography,
  AppBar,
  Button,
  Tabs,
  Tab,
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  colors 
} from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    minHeight: 476,
    margin:"0px 4% 4%",
  },
  rootMedia:{
    backgroundSize:"300px 100px"
  },
  content:{
    padding:"5%",
    height:"calc(100% - 140px)",
    display:"flex",
    flexDirection:"column"
  },
  media: {
    height: 140,
    backgroundColor:colors.lightBlue[700]
  },
  description:{
    marginBottom:"2em"
  },
  techStack:{
    marginTop:"auto"
  }
}))


const CardBox = ({
  item,
}) =>{
  const classes = useStyles();
  return(
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.title}
          classes={{root:classes.rootMedia}}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h3" component="h2" color="primary">
            {item.title}
          </Typography>
          <Typography className={classes.description} gutterBottom variant="h6" color="primary" component="p">
          {item.description}
          </Typography>
          <div className={classes.techStack}>
            <Typography gutterBottom variant="h6" color="primary" component="p">
              Technology stack - {item.tech}
            </Typography>  
          </div>
        </CardContent>
      </Card>
  )
}

export default CardBox;

CardBox.propTypes = {
  item: PropTypes.object.isRequired,
};