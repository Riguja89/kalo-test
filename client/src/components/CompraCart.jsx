import React from 'react';
import { DelToCompra } from '../redux/actions';
import { useDispatch } from 'react-redux';

const CompraCart=({id,name,image})=>{
    const dispatch=useDispatch();

    const borrar=()=>{
        dispatch(DelToCompra(id))
    }

    return(
        <div className='compracart-container'>
            <label htmlFor="">ID</label>
            <label htmlFor="">NOMBRE</label>
            <label htmlFor="">FOTO</label>
            <label htmlFor=""></label>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <div>
            <img src={image} alt="" height="100px"/>
            </div>
            <button onClick={borrar}>Delete</button>
        </div>
    );
};

export default CompraCart;