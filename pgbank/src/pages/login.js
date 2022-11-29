import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

function login () {
    return (
        <>
            <Header></Header>

            <div style={{
                width: "60vw",
                height: "60vh",
                marginLeft: "18vw", 
                marginTop: '5vh',
                borderStyle: "solid",  
                borderColor:"#1f526d", 
                display: "column", borderWidth: "thin", borderRadius: "15px", 
                backgroundColor: "#2f6b90", opacity: "0.85"}}>

                <input placeholder='CPF' style={{width: "40vw",
                    height: "8vh", 
                    fontSize: "32px",
                    textAlign: "center",
                    borderRadius:"10px",
                    marginLeft: "10vw",
                    marginTop: "6vh",
                    backgroundColor: "#0b274c",
                    borderStyle:"none",
                    color: "white"
                 }}/>

                <input placeholder='SENHA' style={{width: "40vw",
                    height: "8vh", 
                    fontSize: "32px",
                    textAlign: "center",
                    borderRadius:"10px",
                    marginLeft: "10vw",
                    marginTop: "6vh",
                    backgroundColor: "#0b274c",
                    borderStyle:"none",
                    color: "white"
                }}/>

                <Link to="/">
                <h2 style={{ color: "white", marginLeft: "25vw"}}>  ESQUECI A SENHA</h2>
                </Link>
                

                <Link to="/account">
                    <button style={{
                        cursor: "pointer",
                        color: "white" ,
                        fontSize: "40px",
                        marginLeft: "20vw",
                        marginTop: "2vh",
                        borderStyle: "solid", 
                        borderColor:"#142b4a",
                        borderRadius: "15px",
                        width: "22vw",
                        height:"8vh",
                        backgroundColor: "#142b4a"}}>
                        
                        Entrar
                        
                    </button>
                </Link>
                  
            </div>
            
        </>
    )
}

export default login;