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

  const toggleMode = (cls) => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('DarkMode has been disabled', 'success');
      document.title = 'TextUtils - Home';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('DarkMode has been enabled', 'success');
      document.title = 'TextUtils - Home - DarkMode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About mode={mode} />} />
            <Route exact path='/' element={<TextForms heading="Try TextUtils - Text analyzer" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
