import Nav from "./Nav"
import './styles/Blog.css'
import Circle from '../Images/Circle.png';
import {Link} from 'react-router-dom';
export default function Blog() { 
    return ( 
        <>
            <Nav />
            <div className = "blog_Div">
                <input className = "blog_Search" type = "text" textara = "60">
                </input>
                <img id = "circle_Push"src = {Circle} />
                </div>


                <div className = "blog_Heading">
                    <h1>My Latest Stories</h1>
                    <ul>
                        <li> <Link className ="links" to ="HowToConnectToMetaMask">How To Create A Simple DaPP</Link></li>
                        <li> <Link className ="links" to ="WhatItMeansToBeHuman">How To Connect Site To MetaMask</Link></li>
                    </ul>
                   
                    
                    </div>

                    <div className = "wave_Div">
                        <p>Did You Connect Your Eth Wallet?</p>
                            <button className  = "wave">Wave To Me</button>

                        </div>

                        <div className ="circle_Bottom">
                <img src = {Circle} />

                            </div>
            
        </>
      
    )



}