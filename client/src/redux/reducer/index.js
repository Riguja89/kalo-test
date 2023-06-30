const initialState = {
    products: [],
    product:{},
    compras:[],
    total: 0,
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
                compras: state.compras.concat([action.payload]),
                total: state.total+action.payload.price
    
            };

            case "TOTAL_UPDATE":
            //console.log(action.payload);
           
            return{
              
                ...state,
                total: state.total + action.payload
    
            };

            case "DEL_COMPRA":
          
          const compraux=state.compras.filter((c=>c.id!==action.payload));
          const total=compraux.reduce((acum,current)=>acum+current.price,0)

          return{
              ...state,
             compras:compraux,
             total: total
  
          };

          default: return {...state};

};

};
export default rootReducer;