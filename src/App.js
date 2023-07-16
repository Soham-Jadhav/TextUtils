import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }

  // // For color pallet
  // const removeBodyClass = () => {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  // }

  const toggleMode = (cls) => {
    // // For color pallet
    // removeBodyClass();
    // console.log(cls);
    // document.body.classList.add('bg-' + cls);
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('DarkMode has been disabled', 'success');
      document.title = 'TextUtils - Home';

      // // For Flashy titles
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Download TextUtils Now!';
      // }, 1500);

    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('DarkMode has been enabled', 'success');
      document.title = 'TextUtils - Home - DarkMode';

      // // For Flashy titles
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Download TextUtils Now!';
      // }, 1500);

    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
    {/* <Navbar /> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path='/about' element={<About mode={mode}/>} />
          <Route exact path='/' element={<TextForms heading="Try TextUtils - Text analyzer" mode={mode} showAlert={showAlert} />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
