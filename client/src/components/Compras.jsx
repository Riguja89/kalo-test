import React from 'react';
//import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CompraCart from './CompraCart';
import { useNavigate } from 'react-router-dom';
import arrow from "../images/left-arrow.svg";
import { Link } from "react-router-dom";

const Compras=()=>{
    const compras = useSelector((state) => state.compras)
    const navigate = useNavigate();

    const goback=()=>{
        navigate(-1)
    }

    return(
        <div className='compras-ontainer'>
            <div className='back-arrow' onClick={goback}>
                <img src={arrow} height="30px" alt="" />
            </div>

            <div>
                <h2> PRODUCTOS AGREGADOS A MIS COMPRAS</h2>
            </div>
            {compras.length?<>
               { compras.map(producto=>(
                <CompraCart 
                key={producto.id}
                id={producto.id}
                image={producto.image}
                name={producto.name}
                ></CompraCart>
            ))}
            <div>
            <Link to="/checkout">
            <button >Checkout</button>
            </Link>              
            </div>
            </>:<>
            <p>Aún no tienes productos agregados a Compras</p>
            </>
           }
        </div>
    );
};

export default Compras;