import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

function account () {
    return (
        <>
        <Header></Header>

        <div style={{
                width: "50vw",
                height: "40vh",
                marginLeft: "22vw", 
                marginTop: '5vh',
                borderStyle: "solid",  
                borderColor:"#1f526d", 
                display: "column", borderWidth: "thin", borderRadius: "15px", 
                backgroundColor: "#2f6b90", opacity: "0.85"}}>


        
                
            <div style={{
                display: "column",
                color:"white",
                marginLeft: "18vw",
                fontSize: "35px"
            }}>
                <h3> Olá, Isabela</h3>

                <h3> SALDO NA CONTA</h3>
                <h2> R$ 3.475, 32</h2>


            <Link to="/login">
            <button style={{
                    width: "12vw", height: "5vh",
                    backgroundColor: "#213b5e", borderStyle: "solid", borderSjze: "thin", borderRadius: "10px", color: "white",
                    fontSize: "26px", marginLeft: "1vw"
                }}> VER EXTRATO</button>
            </Link>
                
            </div>
        </div>
        <Footer></Footer>
        
        </>
    )
}

export default account;