import React from 'react';
import { 
  makeStyles,
  Box,
  Container,
  Grid,
  colors,
  Typography,
  Hidden
} from '@material-ui/core';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import GlitchText from 'react-glitch-effect/core/GlitchText';

import PropTypes from 'prop-types';
import Navbar from './navbar/index';
import BottomBar from './bottombar/index';
import Page from '../components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    backgroundColor:theme.palette.primary.main
  },
  container:{
    padding:"4% 5%"
  },
  content:{
    marginTop:0,
  },
  startedContent:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    height:"70vh",
    opacity: 1,
    visibility: "visible",
    padding: 0,
    margin: 0,
    position: "relative",

  },
  typographyBreak:{
    textAlign:"center",
    [theme.breakpoints.down('sm')]: {
      fontSize:"2rem"
    },
  }
}))

const Layout = ({
  children,
  navTitle,
  title,
  subTitle
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
              <Box my={3} height="100%">
                <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                  <Grid 
                  item 
                  lg={12}
                  md={12}
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
                              <Typography variant="h3">
                                I'M {title}
                              </Typography>
                            </Hidden>
                          </>
                          :
                          <Typography variant="h3">
                            {title}
                          </Typography>}
                        </GlitchText>
                      </GlitchClip>
                      {subTitle}
                    </div>
                  </Grid>
                  {children}
                </Grid>
              </Box>
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
  title: PropTypes.string
};

export default Layout;