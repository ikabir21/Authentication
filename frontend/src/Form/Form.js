import React, { useState } from 'react';
import { Avatar, Container, Grid, Paper, Typography, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn, signUp } from "../actions/auth";

import Input from "./Input";
import useStyles from './styles';

const initialState = { name: '', email: '', password: ''};

const Form = () => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initialState);

  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignup){
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  }
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const switchMode = () => {
    setIsSignup(prevIsSignup => !prevIsSignup);
    setShowPassword(false);
  }

  const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
        <Typography variant="h5">{isSignup ? "Sign up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && <Input name="name" label="Name" handleChange={handleChange} /> }
            <Input name="email" type="email" label="Email Address" handleChange={handleChange} />
            <Input name="password" type={showPassword ? "password" : "text"} label="Password" handleChange={handleChange} handleShowPassword={handleShowPassword} />
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignup ? "Sign Up" : "Sign In"}</Button>
            <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? "Alread have an account? Sign In" : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Form;
