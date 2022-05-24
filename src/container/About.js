import React from 'react'
import {
    Link
    } from "react-router-dom";
    import TextField from '@material-ui/core/TextField';
 
import Button from '@material-ui/core/Button';
function About(){ 
    
    /*gotohome=()=>{
        this.props.history.push('/')  <-- use navigate method instead of hidtory method in router v6 version
    }*/
    
    {
        return(
            <div>
        
        <legend><h1>SignUp Page</h1></legend>
            <TextField id="outlined-basic" label="name" variant="outlined" />
            <br/>
            <br/>
            <TextField id="outlined-basic" label="password" variant="outlined" />
            <br/>
            <br/>
            <TextField id="outlined-basic" label="email" variant="outlined" />
            <br/>
            <br/>
            <TextField id="outlined-basic" label="mobile number" variant="outlined" />
            <br/>
            <br/>

            <Link to='/'><Button variant="outlined" color="primary">
        Register
      </Button></Link>
            {/*<button onClick={this.gotohome}>go to home</button>*/}
            </div>
        )
    }
}
export default About;