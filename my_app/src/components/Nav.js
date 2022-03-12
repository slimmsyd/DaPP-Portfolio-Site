import React, { useEffect, useState } from 'react';
import './styles/nav.css';
import LightMode from '../Images/LightModePoly.png';
import DarkMode from '../Images/DarkmodePoly.png';
import PolyConnect from '../Images/PolyConnectWallet.png';
import menu from '../Images/BurgerMenu.png';
import {Link }  from 'react-router-dom'
import App from '../App';

export default function Nav() { 
    const [polyConnect, setPolyConnect] = useState(false);
    const [line, setLine] = useState(false);
    function setTrue() {
     setPolyConnect(true)
     console.log(polyConnect)
    };
    function setFalse() { 
        setPolyConnect(false);
        console.log(polyConnect)
    }  function moveLine() { 
        setLine(true);
        console.log(line)
    }   
    function setLineFalse() {
        setLine(false);
    }



    useEffect(() => { 
        
    }, [moveLine])
  



    return ( 


        <nav className = "nav">
        <div className = "connectWalletDiv">

        <ul className = "ulNav ulFlexRow">
            <li className = "liNav" id = "lightModeClick">
                    <img src = {LightMode} />
            </li>
            <li className = "liNav">
                    <img src = {DarkMode} />
            </li>
        </ul> 
        </div>
        <div className = "connectWalletDiv">

        <ul className = "ulNav ulFlex2 ">
            <li  >
                   <Link className = {`liNav _navigation afterLine ${line ? 'afterLineTrans' : "liNav _navigation "}` }to = "/">Home</Link>
            </li>
            <li >
                   <Link onClick={setLineFalse} onMouseEnter={moveLine} onMouseLeave= {setLineFalse} className = "liNav _navigation " to ="/blog">Blog</Link>
            </li>
           
        </ul>
        </div>
        <div className = "connectWalletDiv">
        <ul className = "ulNav ">
            <li className = "liNav " >
                    <img className =  {`polyConnect ${polyConnect ? 'selected' : " "} `} src = {PolyConnect} />
            </li>
            <li className = "liNav connectWallet ">
                
                {/* Display WHen ViewPort Gets Smaller */}
                <div className = "menu-Burger">
                    <img src = {menu} />
                </div>

                    <button
                        onMouseEnter= {setTrue}
                        onMouseLeave = {setFalse}
                    >Connect Wallet</button>
            </li>
        </ul>
        </div>
       
        </nav>

    )
    


}
