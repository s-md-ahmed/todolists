import './App.css';
import React from 'react';
import Navbar from './components/navbar'
import Heading from './components/Heading'
import Checklist from './components/Checklist';
function App() {
  return (
  <>
    <Navbar title="Todo list"/>
    <Heading/>
    <Checklist/>
  </>
  );
}
export default App;