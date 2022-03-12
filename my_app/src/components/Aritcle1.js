import './styles/Article.css';
import Nav from './Nav';
import Facebook from '../Images/FaceBook.png';
import Instagram from '../Images/Instagram.png';
import Twitter from  '../Images/Twitter.png';
import MetaMask from '../Images/MetaMaskLogo.png';
import Circle from '../Images/Group3.png';
export default function Aritlce1() { 

    return(
        <div class = "body_Wrapper">
        
        <Nav />
        <div className = "wrapper">
            <header>How To Create A Simple Dapp</header>
                <div className = "wrapper_Layout">
                <div className = "wrapper_Description">
                    March 12th 2022
                </div>
                <ul className = "social_Links">
                    <li><a href = "https://twitter.com/slimmsyd" ><img src = {Twitter} /></a></li>
                    <li><img src = {Instagram} /> </li>
                    <li><img src = {Facebook} /> </li>
                </ul>
                <div className = "wrapper_Description">
                    Sydney Sanders
                </div>
                </div>
            </div>

            <div className = "img_Heading">
                <img src = {MetaMask} />
            </div>

            <section className = "article">
            <div className = "article_Wrapper">
                <article>
                    <img src = {Circle} />
                    <p>Web3 is the booming thing in tech right now and has been increasingly getting attention from everyone and their mother. You got this creative urge and want to take apart of this highly innovative scene.</p>
                  


                </article>

            </div>

            </section>
            
</div>
    
    )


}