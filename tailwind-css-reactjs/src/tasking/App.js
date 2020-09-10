// Clone from https://kanlist.com/
import React, { useState, useEffect } from 'react';
import "./App.css"
import Header from './components/Header';
import apiService from './apiService';
import Projects from './components/Projects';

const AppTasking = () => {
  const [listProject, setListProject] = useState([]);
  useEffect(() => {
    apiService.getAllProject().then(data => {
      setListProject(data);
    }).catch(error => {
      console.trace(error)
    })
  }, []);
  return <div className="w-screen h-screen bg-gray-100">
    <Header />
    <Projects listProject={listProject} />
  </div>
}

export default AppTasking;