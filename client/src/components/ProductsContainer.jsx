import React, {useEffect} from 'react';
import ProductCart from './ProductCart';
import { useDispatch,useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions';

const ProductsContainer=()=>{
    const dispatch=useDispatch();
    const products = useSelector((state) => state.products)

    useEffect(()=>{
        dispatch(getAllProducts());

    },[])




    return(
        <div className='products-container'>
            {products.map((product)=>(
                 <ProductCart key={product.id} 
                 id={product.id}
                 name={product.name}
                 description={product.description}
                 image={product.image}
                 imagefondo={product.imagefondo}
                 >
                 </ProductCart>
            ))}
         
        </div>
    );
};

export default ProductsContainer;