import axios from 'axios'

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT = "GET_PRODUCT";
export const ADD_TO_COMPRA = "ADD_TO_COMPRA";
export const DEL_COMPRA = "DEL_COMPRA";
export const TOTAL_UPDATE = "TOTAL_UPDATE";



//const products=[
//   {
//       id:1,
//       name:"Pufi RAIN",
//       price: 20,
//       description:"Descripcion del producto. Este es un texto simulado",
//       image:"https://st.depositphotos.com/1005549/2927/v/450/depositphotos_29277447-stock-illustration-red-umbrella-on-white-background.jpg", 
//       imagefondo:"https://media.gettyimages.com/id/1347534861/photo/smiling-man-with-blue-umbrella.jpg?s=612x612&w=gi&k=20&c=FDYORM_PUSCxSPAg694134gcFO_hpaT6QQRWBUlaLiA="
//   },
//   {
//       id:2,
//       name:"Pufi PUFF",
//       price: 150,
//       description:"Descripcion del producto. Este es un texto simulado",
//       image:"https://http2.mlstatic.com/D_NQ_NP_809683-MLA45412036528_042021-O.webp", 
//       imagefondo:"https://http2.mlstatic.com/D_NQ_NP_126315-MLA25232304977_122016-O.webp"
//   },
//   {
//       id:3,
//       name:"Pufi CART",
//       price: 40,
//       description:"Descripcion del producto. Este es un texto simulado",
//       image:"https://el-comerciante.cl/wp-content/uploads/2020/09/http___image.eston_.top_24980_fms_public_2020-07_30-17-43-27-466_7HH1107988-7.jpg",
//       imagefondo:"https://cdn.shopify.com/s/files/1/0264/7959/1495/products/bolsas-ecologicas-organizadoras-para-supermercado-948472.jpg?v=1656001016"
//   },
//   {
//       id:4,
//       name:"Pufi NAP",
//       price: 170,
//       description:"Descripcion del producto. Este es un texto simulado",
//       image:"https://http2.mlstatic.com/D_NQ_NP_762727-MLU32027581046_082019-O.webp",
//       imagefondo:"https://http2.mlstatic.com/D_NQ_NP_859715-MCO40452457224_012020-V.jpg"
//   }
// ]

export const getAllProducts = () => dispatch => {
    //console.log("va a hacer la peticion")

   return axios.get('http://localhost:4242/api/products')
    .then(response=> response.data)
    .then(products=> dispatch({type:GET_ALL_PRODUCTS, payload: products}))
    .catch(error=>console.log(error))
    
};

export const getProduct = (id) => dispatch => {
  //console.log("va a hacer la peticion")

  return axios.get(`http://localhost:4242/api/products/${id}`)
    .then(response=> response.data)
    .then(product=> dispatch({type:GET_PRODUCT, payload: product}))
    .catch(error=>console.log(error))   

};

export const addToCompra = (product) => dispatch => {
  //console.log("va a hacer la peticion")
dispatch({type:ADD_TO_COMPRA, payload: product});
//dispatch({type:TOTAL_UPDATE, payload: product.price});
};

export const DelToCompra = (id) => dispatch => {
  //console.log("va a hacer la peticion")
dispatch({type:DEL_COMPRA, payload: id});
};