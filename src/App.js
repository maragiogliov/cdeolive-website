import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';


const AppContent = () => {

  return (
    <>

        <div className='app-container'>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>

    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
