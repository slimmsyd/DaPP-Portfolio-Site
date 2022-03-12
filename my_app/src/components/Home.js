import '../App.css';
import Nav from './Nav.js';
import Sphere from '../Images/Group.png';

import React, {useRef} from 'react';

import Design from '../Images/Design.png';
import Nodes from '../Images/Nodes.png';
import Web from '../Images/Web.png';
import Shape from '../Images/EllipseShape.png';
import PolyGon from '../Images/PolyGon.png';

import Twitter from '../Images/Twitter.png';
import Instagram from '../Images/Instagram.png';
import Facebook from '../Images/FaceBook.png';

import Project from './Projects';
import MintButton from './Mint';
import Contact from './Contact';

export default function Home() { 
const itemToScroll = useRef(null);



    return (
        <>
          <Nav />
    
          <div className = "home_Header">
    
            <div className = "heading_Contents">
              <p>Hi! There !</p>
                <span id ="line"></span>
               <h1>I'm Sydney Sanders</h1>
                <h2> Front-End Developer </h2>
                <h3>I Like To Keep Things Very Minimal.</h3>
                <button onClickCapture={() => itemToScroll.current.scrollIntoView()} className = "explore">
                    Explore My Work
                  </button>
    
              </div>
            <div className = "imageSphere">
              <img src = {Sphere} />
    
              </div>
    
            <div className = "socials">
              <ul>
                <li><img src = {Facebook}></img></li>
                <li><img src = {Twitter}></img></li>
                <li><img src = {Instagram}></img></li>
              </ul>
              
              </div>
    
            </div>
    
            <section className = "divide">
                <div className = "divideLine"></div>
              </section>
    
    
        <section className ="body">
          <div className = "whatIDo">
              <h2>What I Do </h2>
            </div>
    
            <main className = "main_Contents">
              <img id = 'shape' src={Shape}></img>
                <div className ="development">
                    <img src = {Web} />
                    <h4>Development</h4>
                    <p>Specialzing predomitlay in Front-End Developing. I use various web techonolgies. Tech stack includes. Javascript-Css, Html,NodeJs, NextJs, and ReactJs.
                    </p>
                  
                  
                  </div>
                <div className ="development">
                      <img src = {Design}></img>
                    <h4 id = "design">Design</h4>
                    <p>Specialzing predomitlay in Front-End Developing. I use various web techonolgies. Tech stack includes. Javascript-Css, Html,NodeJs, NextJs, and ReactJs.
                    </p>
                  
                  
                  </div>
                <div className ="development">
                    <img src = {Nodes} />
                    <h4>Web3</h4>
                    <p>Specialzing predomitlay in Front-End Developing. I use various web techonolgies. Tech stack includes. Javascript-Css, Html,NodeJs, NextJs, and ReactJs.
                    </p>
                  
                  
                  </div>
    
    
    
              </main>
    
    
          </section>
    
    
          <section className = "divide">
                <div className = "divideLine"></div>
              </section>
    
    
              <section className ="skills">
              <div className = "whatIDo">
              <h2>Skills </h2>
            </div>
                <div className = "skill_Card">
                    <div className = "card">
                      <div className = "card1">
                        <div className = "subCard">
                            HTML 
                          </div>
                          
                        <div className = "subCard card_Top">
                            React 
                          </div>
                          
                        <div className = "subCard card_Top">
                            Git 
                          </div>
                   
                          
                            </div>
                      <div className = "card1">
                      <div className = "subCard">
                          
                          CSS 
                        
                        </div>
                               
                        <div className = "subCard card_Top">
                            NextJs 
                          </div>
                               
                       
                        <div className = "subCard card_Top">
                            EtherJs 
                          </div>
                        <div className = "poly">
                            <img  className='polyGon' src = {PolyGon} />
                          </div>
                            </div>
                      <div className = "card1">
                      <div className = "subCard">
                          
                          Javascript 
                        
                        </div>
                        <div className = "subCard card_Top">
                            Solidity 
                          </div>
                        <div ref = {itemToScroll} className  = "subCard card_Top">
                            NodeJs 
                          </div>
                               
                            </div>
                    
                          </div>
              
              </div>
                </section>
            <Project x />
            <br>
                
                </br>
                <br>
                
                </br>
                <br>
                
                </br>  <br>
                
                </br>
                <br>
                
                </br>
                <br>
                
                </br>  <br>
                
                </br>
                <br>
                
                </br>
                <br>
                
                </br>  <br>
                
                </br>
                <br>
                
                </br>
                <br>
                
                </br>  <br>
                
                </br>
                <br>
                
                </br>
                <br>
                
                </br>  <br>
                
                </br>
                <br>
                
                </br>
                <br>
                
                </br>  <br>
                
                </br>
                <br>
                
                </br>
                <br>
                
                </br>



            <MintButton />
            <Contact />
    
        </>
      );
    }

