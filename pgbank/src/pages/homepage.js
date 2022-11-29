import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

function homepage() {
    return(
        <>
            <Header ></Header>
            <div className='container' style={{display: "flex"}}>
                <div style={{marginLeft: "15vw", borderStyle: "solid",  borderColor:"#1f526d", display: "flex", borderWidth: "thin", borderRadius: "15px",width: "25vw", backgroundColor: "#2f6b90", opacity: "0.85"}}>
                    <div style={{paddingLeft: "3.7vw", color: "white", fontSize: "35px"}}>
                    <h2>TARIFA ZERO</h2>
                    <h2>SEM ANUIDADE</h2>
               
                    <h2>R$ 1,00 = 1PT</h2>
                    
                    <h2>CASHBACK</h2>
                    </div>
                </div>
                <div style={{marginLeft: "15vw", borderStyle: "solid",  borderColor:"#1f526d", display: "flex", borderWidth: "thin", borderRadius: "15px",width: "25vw", backgroundColor: "#2f6b90", opacity: "0.85"}}>
                    <div style={{ color: "white"}}>

                        <Link to="/login">
                            <button style={{cursor: "pointer", color: "white" , fontSize: "40px", marginLeft: "5vw", marginTop: "12.5vh", borderStyle: "solid",  borderColor:"#142b4a",borderRadius: "15px",width: "15vw", height:"7vh", backgroundColor: "#142b4a"}}>Entrar</button>
                        </Link>
                        <Link to="/">
                            <button style={{cursor: "pointer",color: "white", fontSize: "40px",marginLeft: "5vw", marginTop: "5vh", borderStyle: "solid",  borderColor:"#142b4a",borderRadius: "15px",width: "15vw", height:"7vh", backgroundColor: "#142b4a"}}>Abrir conta</button>
                        </Link>
                       
                       
                    </div>
                </div>
            </div>
            <Footer></Footer>
            
        </>
    );
}

export default homepage;