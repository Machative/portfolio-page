import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectList from './components/ProjectList';
import Project_IoTLog from './pages/Project_IoTLog';
import Project_EBike from './pages/Project_EBike';
import Project_RCSwitch from './pages/Project_RCSwitch';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/portfolio-page" element={<Home />} />
          <Route path="/portfolio-page/projects" element={<ProjectList />} />
          <Route path="/portfolio-page/projects/IoTLoggingNetwork" element={<Project_IoTLog />} />
          <Route path="/portfolio-page/projects/SelfDrivingBicycle" element={<Project_EBike />} />
          <Route path="/portfolio-page/projects/GPRCSwitch" element={<Project_RCSwitch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;