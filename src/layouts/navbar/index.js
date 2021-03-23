import React,{useState} from 'react';
import { 
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  ListItem,
  useScrollTrigger,
  Container,
  colors,
  Hidden,
  Drawer,
  Divider
} from '@material-ui/core';
import { fade } from "@material-ui/core/styles/colorManipulator";
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import nav from './_nav';

const useStyles = makeStyles((theme) => ({
  root:{
    display:"flex",
    justifyContent: "flex-end",
  },
  toolbar:{
    alignItems:"flex-end",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  buttonText:{
    textTransform:"none"
  },
  button:{
    color:"white",
    textTransform:'none',
    marginRight:35,
    "&:hover": {
      color:colors.lightBlue[400],
      backgroundColor: fade(colors.lightBlue[400], theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
  },
  buttonDrawer:{
    marginRight:"0px !important"
  },
  mobileDrawer: {
    width:180,
    background:theme.palette.primary.main,
    color:'white',
  },
  active: {
    color: theme.palette.secondary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
  },
  title: {
    marginRight: 'auto'
  },
  drawerContent:{
    marginTop:20
  },
  item: {
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',

  },
  divider: {
    // Theme Color, or use css color in quote
    background: theme.palette.secondary.main,
},
}))

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



const Navbar = (props) =>{
  const classes = useStyles() 
  const [open,setOpen] = useState(false)

  const handleDrawer = () =>{
    setOpen(!open)
  }


  const contentUp = (
    < >
      {nav.map((item)=>
      item.title !== "Contact Me"?
      <Button 
      component="a" 
      key={item.href} 
      activeClassName={classes.active}
      component={RouterLink}
      to={item.href}
      className={clsx(classes.button,classes.buttonText)}>
        {item.title}
      </Button>:
      <Button 
      component="a"
       variant="outlined" 
       color="secondary" 
       activeClassName={classes.active}
       component={RouterLink}
       to={item.href}
       className={classes.buttonText} 
       key={item.href}>{item.title}</Button>
      )
      }
    </>
  )

  const contentDown = (
    <div className={classes.drawerContent} >
    {nav.map((item)=>
    <>
    <ListItem
      className={classes.item}
      disableGutters
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.button,classes.buttonDrawer)}
        component={RouterLink}
        to={item.href}
      >
        <span className={classes.title}>
          {item.title}
        </span>
      </Button>
    </ListItem>
    <Divider variant="middle" classes={{root:classes.divider}}/>
    </>
    )
    }
    </div>
  )
  

  return(
    <>
      <ElevationScroll {...props}>
        <AppBar position="sticky">
          <Container className={classes.root} disableGutters maxWidth={false}>
            <Hidden mdUp>
            <Toolbar className={classes.toolbar} disableGutters>
              <IconButton size="medium" color="secondary" onClick={handleDrawer}>
                <MenuIcon color="secondary"/>
              </IconButton>
              <Drawer
                anchor="left"
                classes={{ paper: classes.mobileDrawer }}
                onClose={handleDrawer}
                open={open}
                variant="temporary"
              >
                {contentDown}
              </Drawer>
            </Toolbar>
            </Hidden>
            <Hidden smDown>
              <Toolbar className={classes.toolbar} disableGutters>
                {contentUp}
              </Toolbar>
            </Hidden>
          </Container>
        </AppBar>
      </ElevationScroll>
    </>
  )
}
export default Navbar;