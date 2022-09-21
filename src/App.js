import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route  path="/" element={<News key="general" pageSize={5} country="in" category="general" />}>  </Route>
            <Route  path="/about" element={<News key="about" pageSize={5} country="in" category="about" />}></Route>
            <Route  path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment" />}></Route>
            <Route  path="/business" element={<News key="business" pageSize={5} country="in" category="business" />}></Route>
            <Route  path="/health" element={<News key="health" pageSize={5} country="in" category="health" />}></Route>
            <Route  path="/science" element={<News key="science" pageSize={5} country="in" category="science" />}></Route>
            <Route  path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>

      </>

    );


  }

}
