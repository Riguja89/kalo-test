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
            {products.map((product,i)=>(
                 <ProductCart key={product._id} 
                 id={product._id}
                 index={i}
                 name={product.name}
                 price={product.price}
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