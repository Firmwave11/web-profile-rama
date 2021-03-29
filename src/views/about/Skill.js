import React, {useState} from 'react';
import { 
  useTheme,
  makeStyles,
  Grid,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Box,
  Divider
} from '@material-ui/core';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import SkillBar from 'react-skillbars';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import skillDatabase from 'src/data/skill/database';
import skilLanguage from 'src/data/skill/language';
import skillTools from 'src/data/skill/tools';
import skillJavaScript from 'src/data/skill/javascript';

const all = [...skillDatabase,...skilLanguage,...skillTools,...skillJavaScript]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
         {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  rootTab:{
    marginTop:50,
  },
  divider: {
    // Theme Color, or use css color in quote
    background: theme.palette.secondary.main,
  },
  tabs:{
    [theme.breakpoints.up('md')]: {
      alignItems:"center",
      justifyContent:"center",
    },
  },
  activeTabs: {
    '& .MuiTab-textColorInherit.Mui-selected':{
      color:theme.palette.secondary.main,
      borderRight:`2px solid ${theme.palette.secondary.main}`
    },
    '& .MuiButtonBase-root':{
      borderRight:`2px solid #eee`,
    }
  },
  note:{
    fontSize:"0.8rem"
  }
}))

const About = () =>{
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [skillAll,setSkillAll] = useState(all.sort(function (a, b) {  return b.level - a.level;  }))
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
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
      <Grid item lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center">
        <div className={classes.rootTab}>
          <AppBar position="static" color="primary" elevation={0}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              variant="scrollable"
              aria-label="full width tabs example"
              className={classes.activeTabs}
              classes={{flexContainer:classes.tabs}}
              scrollButtons="auto"
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Database" {...a11yProps(1)} />
              <Tab label="Programming Language" {...a11yProps(2)} />
              <Tab label="Tools" {...a11yProps(3)} />
              <Tab label="JavaScript" {...a11yProps(4)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <SkillBar skills={skillAll} height={15} animationDelay={500} height={'4vh'} offset={100}/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <SkillBar skills={skillDatabase} height={15} animationDelay={500} height={'4vh'}/>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <SkillBar skills={skilLanguage} height={15} animationDelay={500} height={'4vh'}/>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <SkillBar skills={skillTools} height={15} animationDelay={500} height={'4vh'}/>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
              <SkillBar skills={skillJavaScript} height={15} animationDelay={500} height={'4vh'}/>
            </TabPanel>
          </SwipeableViews>
        </div>
      </Grid>
    </Grid>
  )
}
export default About;