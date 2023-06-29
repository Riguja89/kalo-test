import React, {useEffect} from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { getProduct} from '../redux/actions';
import { useParams, useNavigate } from 'react-router-dom';
import arrow from "../images/left-arrow.svg";
import { addToCompra } from '../redux/actions';

const ProductDetail=()=>{

    const { productId } = useParams();
    const dispatch=useDispatch();
    const producto = useSelector((state) => state.product); 
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getProduct(productId));
    },[])

    const goback=()=>{
        navigate(-1)
    }
    const comprar=()=>{
        dispatch(addToCompra(producto.id))
    }



    return(
        <div className='productdetail-container'>
            <div className='back-arrow' onClick={goback}>
                <img src={arrow} height="30px" alt="" />
            </div>
            <div>
                <div className='images-container'>
            <img className='fotodetail' src={producto.image} alt="" height="300px"/>
            <img className='fotodetail' src={producto.imagefondo} alt="" height="300px"/>
            </div>
           <h1>{producto.name } </h1>
           <h2>{producto.description }</h2>         
        
            </div>

            <button onClick={comprar}  className='shop'>COMPRAR</button>
        </div>
    );
};

export default ProductDetail;