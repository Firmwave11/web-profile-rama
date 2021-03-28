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
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

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
          <Typography>{children}</Typography>
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
  divider: {
    // Theme Color, or use css color in quote
    background: theme.palette.secondary.main,
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
        <div className={classes.root}>
          <AppBar position="static" color="primary" elevation={0}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              variant="fullWidth"
              aria-label="full width tabs example"
              className={classes.activeTabs}
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Item One" {...a11yProps(1)} />
              <Tab label="Item Two" {...a11yProps(2)} />
              <Tab label="Item Three" {...a11yProps(3)} />
            </Tabs>
          </AppBar>

          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              All
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
        </div>
      </Grid>
    </Grid>
  )
}
export default About;