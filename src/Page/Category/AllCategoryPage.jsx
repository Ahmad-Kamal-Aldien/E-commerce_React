import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useSelector,useDispatch } from 'react-redux'
import {categoryActions,categoryActionsSpecificPage} from '../../Redux/Actions/categoryActions'


const AllCategoryPage = () => {
   
    const getCategory=useSelector(state=>state.allCategory.category);
    const getLoader=useSelector(state=>state.allCategory.loading);

    const dispatch=useDispatch();
       
    useEffect(()=>{
        dispatch( categoryActions()  );
    },[]);
    
    
    const selectUser=(selected)=>{
        dispatch(categoryActionsSpecificPage(selected))

    }
   
    return (
        <div style={{minHeight:'670px'}}>
       
            <CategoryContainer />
            <Pagination selectUser={selectUser}
             pageCount={getCategory.paginationResult.numberOfPages}/>


        </div>
    )
}

export default AllCategoryPage
