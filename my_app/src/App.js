import './App.css';
import Home from './components/Home';
import Blog from './components/Blog';
import Aritlce1 from './components/Aritcle1';
import {BrowserRouter, Link, Route,Routes } from 'react-router-dom';

function App() {
  return ( 
    <>
    <BrowserRouter>
      
      <Routes>
        <Route exact path = "/" element = {<Home />}>
            </Route>
          <Route exact path = "/blog" element = {<Blog />}></Route>
          <Route path = "/blog/HowToConnectToMetaMask" element = {<Aritlce1 />}></Route>
      </Routes>

    </BrowserRouter>

    </>

  )
  }
export default App;
