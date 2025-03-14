import baseURL from "../../API/API"
import { GET_ALL_CATEGORY,GET_ERROR } from "../TypesRedux";
const categoryActions=()=>async(dispatch)=>{
    try{
        const category=await baseURL.get("/api/v1/categories");
    
       
        dispatch({
            type:GET_ALL_CATEGORY,
            payload:category.data


        })


    }catch(e){
        dispatch({
           
            type:GET_ERROR,
          payload:"Message Is"+alert( e)
        })

    }
    
}
export default categoryActions