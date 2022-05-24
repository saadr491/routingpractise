import React from 'react'

 import Home from './container/Home.js'
 import About from './container/About.js'
 
 
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
 
} from "react-router-dom";
import Dashboard from './container/dashboard.js';
 
 

// https://reactrouter.com/web/guides/quick-start

function AppRouter() {
        return(
         <Router>
           <Routes>
              <Route path='/' element={<Home/>} component={Home}></Route>   {/*'exact' will show the page with '/' else t will never show with like '/home' */}
             <Route path='/About' element={<About/>} component={About}></Route>
             <Route path='/Dashboard' element={<Dashboard/>} component={Dashboard}></Route>
             </Routes>
         </Router>    
        )
    }

export default AppRouter;