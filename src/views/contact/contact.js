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
  Box,
  Snackbar,
  CircularProgress,
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
  },
  snackbar:{
    '& .MuiSnackbarContent-root':{
    textAlign:'center',
    justifyContent:'center'
    }
  },
  snackbarSuccess:{
    backgroundColor:'#4caf50 !important',
    '& .MuiSnackbarContent-root':{
      backgroundColor:'#4caf50 !important'
      }
  },
  snackbarFailed:{
    backgroundColor:'red ',
    '& .MuiSnackbarContent-root':{
      backgroundColor:'red'
    }
  }
}))                      

const validationSchema = yup.object({
  name: yup
    .string('Enter your Name')
    .min(3, 'Name min 3 Characters')
    .max(30, 'Name max 30 characters length or you can use just nickname')
    .required('Name is required for me to know you'),
  email: yup
    .string('Enter your Email')
    .email('Enter a valid email')
    .max(40, 'Email max 30 characters length'),
  phoneNumber: yup
    .string('Enter your Phone Number')
    .matches(/^[0-9]+$/, "Must be only digits")
    .max(15, 'Must be exactly 5 digits'),
  subject: yup
    .string('Enter your Subject')
    .min(3, 'Subject min 3 Characters')
    .required('Subject is required'),
  message: yup
    .string('Enter your Message')
    .min(5, 'Message min 5 Characters')
    .required('Message is required (you can just say hello to me) '),
});

const ContactForm = () =>{
  const classes = useStyles()
  const [message,setMessage] = useState('')
  const [submit, setSubmit] = useState(false);
  const [status,setStatus] = useState(false)
  const [snack,setSnack] = useState(false)

  const handleClose = () => {
    setSnack(false);
  };

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber:'',
      subject:'',
      message:''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setSubmit(true);
       fetch(`${process.env.REACT_APP_API_CONTACT}`, {
          method: "POST",
          headers: { 
            'x-api-key': `${process.env.REACT_APP_API_KEY}`,
            "Content-Type": "application/json",
            'channel' : 'ramasapto'
        },
          body: JSON.stringify(values)
        })
        .then((response) => {
          if (response.ok) {
            setSubmit(false);
            setSnack(true)
            setStatus(true)
            setMessage(<Typography >Message Sent Successfully</Typography>)
          } else {
            setSubmit(false);
            setSnack(true)
            setStatus(false)
            setMessage(<Typography >Message Send Failure</Typography>)
          }
        })
        .then((responseJson) => {

        })
        .catch((error) => {
          setSubmit(false);
          console.log(error)
          setSnack(true)
          setStatus(false)
          setMessage(<Typography >Sorry, An error has occurred on the server. Please, try your request again later.</Typography>)

        });
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
        <form onSubmit={form.handleSubmit}>
          <ContactTextField 
            fullWidth
            id="name"
            name="name"
            label="Name"
            color="secondary"
            margin="normal"
            autoComplete="off"
            value={form.values.name}
            onChange={form.handleChange}
            error={form.touched.name && Boolean(form.errors.name)}
            helperText={form.touched.name && form.errors.name}
          />
          <ContactTextField 
            fullWidth
            id="email"
            label="Email"
            name="email"
            color="secondary"
            margin="normal"
            autoComplete="off"
            value={form.values.email}
            onChange={form.handleChange}
            error={form.touched.email && Boolean(form.errors.email)}
            helperText={form.touched.email && form.errors.email}
          />
          <ContactTextField 
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            color="secondary"
            margin="normal"
            autoComplete="off"
            value={form.values.phoneNumber}
            onChange={form.handleChange}
            error={form.touched.phoneNumber && Boolean(form.errors.phoneNumber)}
            helperText={form.touched.phoneNumber && form.errors.phoneNumber}
          />
          <ContactTextField 
            fullWidth
            id="subject"
            name="subject"
            label="Subject"
            color="secondary"
            margin="normal"
            autoComplete="off"
            value={form.values.subject}
            onChange={form.handleChange}
            error={form.touched.subject && Boolean(form.errors.subject)}
            helperText={form.touched.subject && form.errors.subject}
          />
          <ContactTextField 
            fullWidth
            id="message"
            name="message"
            label="Message"
            color="secondary"
            margin="normal"
            autoComplete="off"
            multiline
            rows={3}
            rowsMax={8}
            value={form.values.message}
            onChange={form.handleChange}
            error={form.touched.message && Boolean(form.errors.message)}
            helperText={form.touched.message && form.errors.message}
          />
          <Box my={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="secondary" style={{textTransform:"none",minWidth:105}} type="submit">
              <GlitchClip onHover={true}>
                <Typography >
                {
                  submit ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    'Send Message'
                  )
                }
                </Typography>
              </GlitchClip>
            </Button>    
          </Box>
        </form>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snack}
        style={{backgroundColor:'green'}}
        className={clsx(classes.snackbar,classes.snackbarFailed, {
          [classes.snackbarSuccess]: status
        })}
        onClose={handleClose}
        message={message}
      />
    </Grid>
  )
}
export default ContactForm;