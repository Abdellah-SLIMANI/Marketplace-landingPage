import React from 'react';
import images from '../../assets/images';
import "./Description.scss"
//Importing Material UI things
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
//Importing Formik and Yup for form validation
import { FormikTextField } from 'formik-material-fields';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

//Form validation utils
const storeCreationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required!'),
  password: Yup.string().min(6,'Password is too short!').required('Password is required!'),
  storeName: Yup.string().required('Store name is required!'),
});

const initialValues = {
  email : "",
  password: "",
  storeName: ""
}


//material UI Dialog styling
const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
      backgroundColor: '#38C8D1'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
      textAlign: "center",
      letterSpacing: '4.5px'
    },
    dialogContent: {
        // backgroundColor: '#38C8D1',
        height: 'auto',
        width: "25%",
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: '2.5%'
    },
    textFeild:{
        marginBottom: "5%",
        borderColor: '#4382DF'
    },
    diagBtn:{
        backgroundColor: '#38C8D1',
        padding: '1rem',
        color: 'white',
        fontWeight: 'bolder',
        "&:hover": {
            backgroundColor: '#38C8D1'
        }
    }
  }));

function Description(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }
    return (
        <div className = "mainContainer">
            <div className = "drawingContainer">
                <img src={images.drawing.default} alt="" />
            </div>
            <div className="descriptionContainer">
            <div className="h1sDiv">
                <h1 className="horizontalText">Lorem, ipsum dolor.</h1>
                <h1 className="mainTitle">MarketPlace</h1>
            </div>
            <div className="semiContainer">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga adipisci ipsa maxime veniam. Illum cum doloribus,
                     modi mollitia dignissimos maxime.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga adipisci ipsa maxime veniam. Illum cum doloribus,
                     modi mollitia dignissimos maxime. 
                </p>
                <div className="formContainer">
                    <Button onClick={handleClickOpen}>Start Selling Now</Button>
                    <input type="text" placeholder = "Enter Your Email..."/>
                </div>
            </div>
        </div>

        <Dialog fullScreen open={open} onClose={handleClose} className="dialog">
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Start creating your store Now!
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.dialogContent}>
          <Formik
            initialValues = {initialValues}
            validationSchema = {storeCreationSchema}
            onSubmit = {values => {
              console.log(`Vlaues: ${values}`)
            }}
          >
            {({errors, touched}) => (
          <Form>
          <FormikTextField
            className={classes.textFeild}
            autoFocus
            name = "email"
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <FormikTextField
            className={classes.textFeild}
            name ="password"
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
          <FormikTextField
            className={classes.textFeild}
            name ="storeName"
            margin="dense"
            id="store name"
            label="The name of your store"
            type="string"
            fullWidth
          />
        <DialogActions>
        <Button onClick={handleClose} className ={classes.diagBtn} >
            Create Store!
          </Button>
        </DialogActions>
        </Form>
            )}
        </Formik>
        </DialogContent>
      </Dialog>
        </div>
    );
}

export default Description;