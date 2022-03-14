import './styles/project.css';
import AppImage from '../Images/MusicPlayerApp.PNG';
import MintSite from '../Images/MintChildishNFT.png';
import React, {useState} from 'react';

export default function Project() { 
    const [button, setButton] = useState(false)
    const [buttonTwo, setButtonTwo] = useState(false)
    function revealButton() { 
        setButton(true)
        console.log(button, "is true")
    }
   const hideButton = () => { 
       setButton(false);

   }

   function setbutton2()  { 
       setButtonTwo(true)
   }
   function removeButton2() { 
       setButtonTwo(false);
   }


    return(
        <section className = "projects">
               <div className = "whatIDo">
                    <h2> Some Things I Built </h2>
                    <a href =  "https://github.com/slimmsyd">Click Here To Github</a>
                    </div>

                <div className = "main_Card">
                        <div className = "project_Card">
                                <div className = "project_subCard"
                                    onMouseEnter={revealButton}
                                    onMouseLeave = {hideButton}
                                >
                                        <button className ={`clickToSite ${button ? "clickToSiteReveal" : " "}`}>
                                                Go To
                                            </button>
                                        

                                    <img src = {AppImage} />
                                    </div>
                                <div className = "project_subCard empty">
                                    </div>
                               
                            </div>
                        <div className = "project_Card">
                                <div className = "project_subCard"
                                onMouseEnter={setbutton2}
                                onMouseLeave = {removeButton2}
                                >
                                <button className ={`clickToSite backdropWhite ${buttonTwo ? "clickToSiteReveal" : " "}`}>
                                                Go To
                                            </button>
                                        <img src = {MintSite} />

                                    </div>
                                <div className = "project_subCard empty">
                                    </div>
                            </div>
                    </div>

             
          
          
            </section>

    )



}