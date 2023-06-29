const initialState = {
    products: [],
    product:{},
    compras:[],
  };


const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        // Acá va tu código:
        
        case "GET_ALL_PRODUCTS":
          //console.log(action.payload);
          return{
              ...state,
              products: action.payload
  
          };

          case "GET_PRODUCT":
          //console.log(action.payload);
          return{
              ...state,
              product: action.payload
  
          };

          case "ADD_TO_COMPRA":
            //console.log(action.payload);
            if(state.compras.find(c=>c.id==action.payload.id)){
              alert("Este elemento ya se había agregado a compras")
              return {...state};
            }
            alert("Elemento agregado a Compras")
            return{
              
                ...state,
                compras: state.compras.concat([action.payload])
    
            };

            case "DEL_COMPRA":
          
          const compraux=state.compras.filter((c=>c.id!==action.payload));
          console.log(compraux)
          return{
              ...state,
             compras:compraux
  
          };

          default: return {...state};

};

};
export default rootReducer;