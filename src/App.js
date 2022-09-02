import React from 'react';

import './App.css';
import{Header} from './components/Header';

import {Todo} from './todoApp/Todo';

function App() {

  return (
    <>
      <Header></Header>
       <main className='container content'> 
         <Todo/>   
      </main>      
    </>
  );
}

export default App;
