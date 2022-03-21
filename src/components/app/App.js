// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Food from '../food/food';
import Meal from '../meal/meal';
import React from 'react';
import Nav from '../navigation/nav';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <React.StrictMode>
      <Container>
        <Nav/>
        <main>
          <Routes>
            <Route path="/" element={<Meal/>} />
            <Route path="/food" element={<Food/>} />
          </Routes>
        </main>
      </Container>
    </React.StrictMode>
  );
}

export default App;
