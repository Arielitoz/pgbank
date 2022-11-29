import React from 'react';
import Logo from '../assets/images/pg2.png';
import { Link } from 'react-router-dom';

const Header = () => (

  <header className="header_homepage">
            <div className='align' style={{marginLeft: "42vw", marginTop: "5vh"}}>
                <Link to="/">
                    <img className="img_instucional" src={Logo} alt="" style={{width: "200px", height: "200px"}} />
                    
                </Link>
                <h1 style={{marginLeft: "1.5vw", textDecoration: "none"}}>PGBANK</h1>
            </div>
  </header>
);


export default Header;