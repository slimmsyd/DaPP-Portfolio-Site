import './styles/project.css';
import Group from '../Images/Group2.png';



export default function MintButton() { 

    return(
        <section className = "mintSection">
         <img src = {Group} />    
        <button className = "mint">

                MINT!

                </button>
                <p>Thanks For Coming To My Portfolio!
                    If You Connected A Wallet, Mint A SydPortFolio NFT For The Fun!
                </p>
            </section>


    )


}
