import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addToCompra } from '../redux/actions';

const ProductCart=({id, index, price, name, description, image, imagefondo})=>{

    const dispatch=useDispatch();
    const products = useSelector((state) => state.products)

    const comprar=()=>{
        dispatch(addToCompra({id, index, price, name, description, image, imagefondo}))
    }

    return(
        <div className='productcart-container' id={name}>
            {index%2!==0?<>
            <div className='info-container'>
            <img className='imagen-info' height="150px" src={image} alt="" />
            <h2>{name}</h2>
            <h2>$ {price}</h2>
            <hr />
            <p>{description}</p>
            <Link to={`/productos/${id}`}>
            <button className='ver-mas'> {'>'} VER MAS </button>
            </Link>
           </div>
           <div className='image-container'
            style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+`${imagefondo}`+")"}}
            >
            <button onClick={comprar} className='shop'>SHOP</button>
            </div>
            </>:
            <>  
            <div className='image-container'
            style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+`${imagefondo}`+")"}}
            >
            <button onClick={comprar}  className='shop'>SHOP</button>
            </div>
            <div className='info-container'>
            <img className='imagen-info' height="150px" src={image} alt="" />
            <h2>{name}</h2>
            <h2>$ {price}</h2>
            <hr />
            <p>{description}</p>
            <Link to={`/productos/${id}`}>
            <button className='ver-mas'> {'>'} VER MAS </button>
            </Link>
           </div>
           </>}
         
        </div>
    );
};

export default ProductCart;