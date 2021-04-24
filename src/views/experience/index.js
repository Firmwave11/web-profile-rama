import React, {useState} from 'react';
import { 
  makeStyles,
  withStyles,
  Grid,
  Typography,
  Divider,
  Link
} from '@material-ui/core';
import dataWork from 'src/data/experience/work';
import dataInterest from 'src/data/experience/interest';
import dataLanguage from 'src/data/experience/language';
import Layout from 'src/layouts/index';


const TypographyHeader = withStyles((theme)=>({
  root: {
    marginBottom:30,
    [theme.breakpoints.down('xs')]: {
      fontSize:"2rem"
    }
  },
}))(Typography);

const TypographyList = withStyles((theme)=>({
  root: {
    margin:"0 0 1.45rem"
  },
}))(Typography);

const DividerHead = withStyles((theme)=>({
  root:{
    backgroundColor:theme.palette.text.primary,
    marginBottom:30,

  },
}))(Divider);


const useStyles = makeStyles((theme) => ({
  type:{
    color:"#999999"
  },
  step:{
    position:"relative",
    padding:"0 5px 50px 0",
    minHeight:32,
    display:"flex"
  },
  stepContent:{
    width:"100%",
    paddingLeft:50,
    [theme.breakpoints.down('xs')]: {
      padding:10
    },
  },
  stepHead:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    [theme.breakpoints.down('xs')]: {
      flexDirection:"column",
      alignItems:"flex-start",
    },
  },
  circle:{
    position:"relative",
    width:21,
    height:21,
    lineHeight:21,
    borderRadius:"50%",
    color:"#fff",
    background:theme.palette.secondary.main
  },
  line:{
    position:"absolute",
    borderLeft:`1px solid ${theme.palette.secondary.main}`,
    left:10,
    bottom:0,
    top:0,
  },
  img:{
    padding:"2%",
    maxWidth:"100%",
    margin:"0 0 1.45rem"
  },
  desc:{
    maxWidth:"80%",
    marginTop:30,
    [theme.breakpoints.down('xs')]: {
      maxWidth:"100%",
    },
  },
  root:{
    marginBottom:100,
    marginTop:10,
  },
}))

const Experience = () =>{
  const classes = useStyles()
  return (
    <Layout
    navTitle="Experience"
    title="EXPERIENCE"
    subString="Experience"
    >
    <style jsx>{`                      
      ol, ul {
        padding: 0;
        margin: 0 0 1.45rem 1.45rem;
        list-style-position: outside;
        list-style-image: none;
      }
      li {
        margin: 5px;
      }
    `}
    </style>
      <Grid item lg={12} sm={12} xs={12} className={classes.root}>
        <Grid container spacing={10}>
          <Grid item lg={8} md={8} xs={12}>
            <TypographyHeader component="h3" variant="h3">Work Experience</TypographyHeader>
            <DividerHead/>
            {dataWork.map((item)=>
            <div key={item.name} className={classes.step}>
              <div>
                <div className={classes.circle}/>
                <div className={classes.line}/>
              </div>
              <div className={classes.stepContent}>
                <div className={classes.stepHead}>
                  <div>
                    <Typography variant="h5">{item.position}</Typography>
                    <Link href={item.companyLink} target="_blank" rel="noopener noreferrer">
                      <Typography variant="h5">{item.name}</Typography>
                    </Link>
                    <TypographyList variant="h6">{item.dated}</TypographyList>
                  </div>
                  <Link href={item.companyLink} target="_blank" rel="noopener noreferrer">
                    <img className={classes.img} src={item.logo} width="175px"/>
                  </Link>
                </div>
                <div className={classes.desc}>
                  <Typography paragraph dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              </div>
            </div>
            )}
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <TypographyHeader component="h3" variant="h3">Education</TypographyHeader>
            <DividerHead/>
            <div className={classes.root}>
              <Typography variant="h6" paragraph>
              Graduated with a Bachelor's Degree majored in Computer Science from 
              University of Pembangunan Nasional Veteran Jakarta with a GPA of 3.43
              2016 - 2020
              </Typography>        
            </div>
            <TypographyHeader component="h3" variant="h3">Interests</TypographyHeader>
            <DividerHead/>
            <div className={classes.root}>
              {dataInterest.map((interest)=>
                <TypographyList key={interest} variant="h6" paragraph>
                  {interest}
                </TypographyList>       
              )}
            </div>
            <TypographyHeader component="h3" variant="h3">Language</TypographyHeader>
            <DividerHead/>
            <div className={classes.root}>
              {dataLanguage.map((language)=>
                <TypographyList key={language} variant="h6" paragraph>
                  {language}
                </TypographyList>       
              )}      
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default Experience;