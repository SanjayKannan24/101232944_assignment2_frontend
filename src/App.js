import './App.css';
import {BrowserRouter as Router , Route , Routes , Link} from 'react-router-dom';
import AddEmployee from './Pages/AddEmployee';
import Employee from './Pages/Employee';
import ViewEmployee from './Pages/ViewEmployee';
import { useState } from 'react';
import UpdateEmployee from './Pages/UpdateEmployee';


function App() {
  return (
    <Router>
      <div className="body">
        <h1 className="title" >Employee Management App</h1>
      </div>
      <Routes>
        <Route path="/" element={<Employee/>} />
        <Route path="/add" element={<AddEmployee/>} />
        <Route path="/view" element={<ViewEmployee/>} />
        <Route path="/update" element={<UpdateEmployee/>} />
      </Routes>
    </Router>
  );
}

export default App;
