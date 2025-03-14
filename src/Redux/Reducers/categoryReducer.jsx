import {GET_ALL_CATEGORY, GET_ERROR}  from '../TypesRedux'
const initialCategoryReducer={
    category:[],
    loading:true
};

const categoryReducer=(state=initialCategoryReducer,action)=>{
    switch(action.type){
        case GET_ALL_CATEGORY:
        return{
           
            ...state,
            category: action.payload,
            loading:false
        }
        case GET_ERROR:
            return{
            category:action.payload,
            loading:true
        }
        default:
            return state

    }
}
export default categoryReducer