import React, {useState} from 'react';
import { 
  makeStyles,
  withStyles,
  Grid,
  Typography,
  List,
  ListItem,
  TextField,
  ListItemIcon,
  Link,
  colors,
  Button,
  Box
} from '@material-ui/core';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import { fade } from "@material-ui/core/styles/colorManipulator";
import { useFormik } from 'formik';
import * as yup from 'yup';
import clsx from 'clsx';
import data from 'src/data/contactMe';


const ContactTextField = withStyles({
  root: {
    '& .MuiInput-underline:before': {
      borderBottomColor: colors.grey[300] // Semi-transparent underline
    },
  },
})(TextField);

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
  link:{
    textDecoration:"none !important"
  },
  typhography:{
    marginTop:10,
    fontSize:"0.875rem",
    textAlign:"center"
  },
  listItem:{
    justifyContent:"center"
  },
  iconContent:{
    minWidth:40
  }
}))

const validationSchema = yup.object({
  tingkatan: yup
    .string('Enter your Tingkatan')
    .max(30, 'Tingkatan max 30 characters length')
    .required('Tingkatan is required'),
  kelas: yup
    .string('Enter your Kelas')
    .max(30, 'Kelas max 30 characters length')
    .required('Kelas is required'),
});

const ContactForm = () =>{
  const classes = useStyles()

  const tingkatan = useFormik({
    initialValues: {
      kelas: '',
      tingkatan: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Grid
    container
    spacing={3}
    style={{
      marginBottom:30
    }}
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <GlitchSquiggly onHover={true}>
          <Typography variant="h6">
            Contact 
          </Typography>
        </GlitchSquiggly>
      </Grid>
      {data.map((item)=>
        <Grid 
        key={item.to} 
        item 
        lg={4} 
        md={4} 
        sm={6} 
        xs={12}
        >
           <List className={classes.list}>
              <ListItem className={classes.listItem} disableGutters>
                <ListItemIcon className={classes.iconContent} >
                  <item.icon color="secondary"/>
                </ListItemIcon>
                <Typography>{item.title}</Typography> 
              </ListItem>
              {item.link?
                <Link href={item.link} target="_blank" rel="noopener noreferrer" color="inherit" className={clsx(classes.link,classes.icon)}>
                  <Typography className={classes.typhography}>{item.to}</Typography> 
                </Link>
              :
                <Typography className={classes.typhography}>{item.to}</Typography> 
              }
            </List>
        </Grid>
      )}
      <Grid 
      item 
      lg={12} 
      md={12} 
      sm={12} 
      xs={12}
      >
        <ContactTextField 
          fullWidth
          id="tingkatan"
          name="tingkatan"
          label="Name"
          color="secondary"
          margin="normal"
          value={tingkatan.values.tingkatan}
          onChange={tingkatan.handleChange}
          error={tingkatan.touched.tingkatan && Boolean(tingkatan.errors.tingkatan)}
          helperText={tingkatan.touched.tingkatan && tingkatan.errors.tingkatan}
        />
        <ContactTextField 
          fullWidth
          id="kelas"
          label="Email"
          color="secondary"
          margin="normal"
          value={tingkatan.values.kelas}
          onChange={tingkatan.handleChange}
          error={tingkatan.touched.kelas && Boolean(tingkatan.errors.kelas)}
          helperText={tingkatan.touched.kelas && tingkatan.errors.kelas}
        />
        <ContactTextField 
          fullWidth
          id="kelas"
          label="Phone Number"
          color="secondary"
          margin="normal"
          value={tingkatan.values.kelas}
          onChange={tingkatan.handleChange}
          error={tingkatan.touched.kelas && Boolean(tingkatan.errors.kelas)}
          helperText={tingkatan.touched.kelas && tingkatan.errors.kelas}
        />
        <ContactTextField 
          fullWidth
          id="kelas"
          label="Message"
          color="secondary"
          margin="normal"
          multiline
          rows={3}
          rowsMax={8}
          value={tingkatan.values.kelas}
          onChange={tingkatan.handleChange}
          error={tingkatan.touched.kelas && Boolean(tingkatan.errors.kelas)}
          helperText={tingkatan.touched.kelas && tingkatan.errors.kelas}
        />
        <Box my={2} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="secondary" style={{textTransform:"none"}}>
            <GlitchClip onHover={true}>
              <Typography >
                Send Message
              </Typography>
            </GlitchClip>
          </Button>    
        </Box>
      </Grid>
    </Grid>
  )
}
export default ContactForm;