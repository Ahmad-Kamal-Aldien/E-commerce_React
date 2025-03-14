import GET_ALL_CATEGORY from '../TypesRedux'

const initialCategoryReducer={


    category:[],
    loading:true
};

const categoryReducer=(state=initialCategoryReducer,action)=>{
    switch(action.type){
        case GET_ALL_CATEGORY:
        return{
            ...state,
            category:action.payload,
            loading:false
        }
        default:
            return state

    }
}
export default categoryReducer