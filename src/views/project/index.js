import React, {useState} from 'react';
import { 
  makeStyles,
  withStyles,
  useTheme,
  Grid,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Box,
} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import Layout from 'src/layouts/index';
import clsx from 'clsx';
import CardProject from './cardbox';
import DataProfesional from 'src/data/project/profesional';
import DataPersonal from 'src/data/project/personal';
import DataUndergrad from 'src/data/project/undergrad';

const styles = (theme) => ({
  root: {
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
  },
});
const TabPanel = withStyles(styles)((props) => {
  const { children, value, index, classes, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} mt={5} className={classes.root}>
         {children}
        </Box>
      )}
    </div>
  );
})

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
  type:{
    color:"#999999"
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
  root:{
    marginBottom:100,
  },
}))

const Project = () =>{
  const classes = useStyles()
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Layout
    navTitle="Project"
    title="PROJECT"
    subString="Project"
    >
      <Grid item lg={12} sm={12} xs={12}>
        <Grid 
        container
        className={classes.root}
        >
          <Grid item lg={12} sm={12} xs={12}  justify="center" alignItems="center">
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
                  <Tab label="Profesional" {...a11yProps(0)} />
                  <Tab label="Personal" {...a11yProps(1)} />
                  <Tab label="Undergrad" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  {DataProfesional
                  .map((item,index) =>
                    <CardProject item={item} key={index}/>
                  )}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  {DataPersonal
                  .map((item,index) =>
                    <CardProject item={item} key={index}/>
                  )}
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                {DataUndergrad
                  .map((item,index) =>
                    <CardProject item={item} key={index}/>
                  )}
                </TabPanel>
              </SwipeableViews>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default Project;