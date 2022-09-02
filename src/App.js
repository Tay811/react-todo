import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import{Header} from './components/Header';

import {Todo} from './todoApp/Todo';

function App() {

  return (
    <>
      <Header></Header>
       <main className='container content'> 
       <Router>
       <Routes>
          <Route exact path='/todo' element={<Todo/>}/> 
       </Routes> 
       </Router>
      </main> 
      
    </>
  );
}

export default App;
