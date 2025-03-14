import API from "../../API/API"
import { GET_ALL_CATEGORY } from "../TypesRedux";
const categoryActions=()=>{


    
    try{
        const category=API.get("/api/v1/categories");


        return{
            type:GET_ALL_CATEGORY,
            payload:category.data

        }


    }catch(e){

    }
    
}
export default categoryActions