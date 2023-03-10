import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Editor from './Editor';

const App = () => (
  <div>
    <Header/>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/editor" component={Editor} />
    </Routes>
    <Footer/>
  </div>
);