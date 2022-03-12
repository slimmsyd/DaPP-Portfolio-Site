import React from 'react';
import './styles/project.css';


export default function Contact() { 
    return ( 
        <section className = "contactSection">
            <div className = "whatIDo">
                    <h2> Get In Touch ^_^ </h2>
                    </div>

                    <div className = "contactDiv">
                        <form className = "formDiv">
                        <h4>Email</h4>
                            <input className='email' type = "email" id = "email" size = "60"  required></input>
                            <h4>Contact</h4>
                           
                            <textarea rows="30" cols = "60"></textarea>
                            <input className='text' type = "submit" id = "text" size = "30"  required placeholder='Message here...'></input>

                        </form>
                           
                        </div>

            </section>


    )



}