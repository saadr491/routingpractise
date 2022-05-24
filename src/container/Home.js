import React from 'react'
import {
  Link
  } from "react-router-dom";
  import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
 
import Button from '@material-ui/core/Button';
function home(){
        return(
            <div>
                <fieldset>
            <legend><h1>SignIn Page</h1></legend>
            <TextField id="outlined-basic" label="email" variant="outlined" />
            <br/>
            <br/>
            <TextField id="outlined-basic" label="password" variant="outlined" />
            <br/>
            <br/>
            <Link to='/dashboard'><Button variant="outlined">Sign in</Button></Link>
      <br/>
            <br/>
            <Link to='/About'><Button variant="outlined" color="primary">
        Sign up
      </Button></Link>
            
            </fieldset>
            
            </div>
        )
    }
export default home;