import React from 'react';
import	pufifooter from "../images/pufifooter.svg";
import secure from "../images/segura.jpg"
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"
const Footer=()=>{
    return(
        <div className='footer-container'>
            <div className='info-footer-container'>
            <div className='pufi'>
                <img src={pufifooter} alt="" />
            </div>
            <div className='products'>
                <p>PUFI RAIN</p>
                <p>PUFI PUFF</p>
                <p>PUFI CART</p>
                <p>PUFI NAP</p>
            </div>
            <div className='info-contacto'>
                <p>CONTACTO</p>
                <p>AYUDA</p>
                <p>CÓMO PAGAR</p>
                <p>TÉRMINOS & CONDICIONES</p>
            </div>
            <div className='segura'>
                <p>COMPRA 100% SEGURA</p>
                <img src={secure}alt="" height="50px" />
            </div>
            <div className='redes-sociales'>
                <p>SIGUENOS EN </p>
                <img src={facebook} alt="" height="15px" />
                <img src={twitter} alt="" height="15px" />
                <img src={instagram} alt="" height="15px"  />
            </div>
            </div>
    
          <div className='footer-footer'>
            <div>
            <p>PUFI Copyright 2017 Todos los derechos reservados</p>
            </div>
            <div className='brand-logo'>
            <img src="https://brandlivecommerce.com/assets/img/logo-footer.svg" height="20px" alt="" />
           </div>
           </div>

        </div>
    );
};

export default Footer;