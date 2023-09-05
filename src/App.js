// import logo from './logo.svg';
import React,{ useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import About from "./components/About";
import Alert from "./components/Alert";
// import { Switch } from "react-router-dom"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
      const[mode,setMode]=useState('light');

      const[alert,setAlert]=useState(null);
      const showAlert=(message,type)=>{
        setAlert({
          msg: message,
          type: type 
        })

        setTimeout(()=>{
          setAlert(null)
        },1200)
      }


      
      const toggleMode=()=>{
        if(mode==='light')
        {
          setMode('dark');
          document.body.style.backgroundColor ='#042743';
          showAlert("Dark mode is enabled","success")
          document.title="Textutils-Dark Mode"
          // setInterval(()=>{
          //       document.title="Install textutils Now"  
          // },1500)
          // setInterval(()=>{
          //       document.title="Textutils is Amazings"
          // },2000)
        }
        else{
          setMode('light');
          document.body.style.backgroundColor ='white';
          showAlert("Light mode is enabled","success")
          document.title="Textutils-Light Mode"
        }
      }
 
  return (
    <><Router>
      <Navbar title="Textutils" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-.5">
      <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analayze" mode={mode} alert={alert} />}/>

          <Route exact path="/about" element={<About mode={mode}/>}></Route>
         

        </Routes>
      </div>
      
      {/* <div className="container">
      <About/>
      </div> */}
      </Router>
    </>
  );
}

export default App;
