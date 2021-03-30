import React from 'react';
import { 
  NavLink as RouterLink,
 } from 'react-router-dom';
import { 
  makeStyles,
  Box,
  Container,
  Grid,
  colors,
  Typography,
  Link,
  Breadcrumbs,
  Hidden
} from '@material-ui/core';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PropTypes from 'prop-types';
import Navbar from './navbar/index';
import BottomBar from './bottombar/index';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    backgroundColor:theme.palette.primary.main
  },
  container:{
    padding:"4% 8%",
  },
  content:{
    marginTop:0,
  },
  link:{
    color:colors.grey[300],
    textTransform:'none',
    textDecoration:"none !important",
    "&:hover": {
      color:colors.lightBlue[400],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
  },
  startedContent:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    height:"76vh",
  },
  typographyBreak:{
    textAlign:"center",
    [theme.breakpoints.down('xs')]: {
      fontSize:"2.5rem"
    },
  }
}))

const Layout = ({
  children,
  navTitle,
  title,
  subTitle,
  subString
}) =>{
  const classes = useStyles()
  return (
    <Page
    title={navTitle}
    >
      <div className={classes.root}>
        <Container disableGutters className={classes.container} maxWidth={false}>
        <Navbar/>
          <div className={classes.content}>
            <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
              <Grid 
              item 
              lg={12}
              sm={12}
              xs={12}
              >
                <div className={classes.startedContent}>
                  <GlitchClip onHover={true} duration={1500}  >
                    <GlitchText color1={colors.lightBlue[400]} >
                      {navTitle === "Home"?
                      <>
                        <Hidden smUp>
                          <Typography className={classes.typographyBreak} variant="h3">
                            I'M
                          </Typography>
                          <Typography className={classes.typographyBreak} variant="h3">
                            {title}
                          </Typography>
                        </Hidden>
                        <Hidden xsDown>
                          <Typography variant="h2">
                            I'M {title}
                          </Typography>
                        </Hidden>
                      </>
                      :
                      <Typography className={classes.typographyBreak} variant="h2">
                        {title}
                      </Typography>}
                    </GlitchText>
                  </GlitchClip>
                  { navTitle === "Home"?
                    subTitle:
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" style={{color: colors.grey[300]}} />} aria-label="breadcrumb">
                      <Link color="textPrimary" component={RouterLink} to="/" className={classes.link}>
                        Home
                      </Link>
                      <Typography color="secondary">{subString}</Typography>
                    </Breadcrumbs>
                  }
                </div>
              </Grid>
              <Grid 
              item 
              lg={12}
              sm={12}
              xs={12}
              >
                {children}
              </Grid>
            </Grid>
          </div>
          <BottomBar/>
        </Container>
      </div>
    </Page>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  navTitle: PropTypes.string,
  subTitle: PropTypes.element,
  title: PropTypes.string,
  subString: PropTypes.string
};

export default Layout;