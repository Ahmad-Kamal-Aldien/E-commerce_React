import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useSelector,useDispatch } from 'react-redux'
import categoryActions from '../../Redux/Actions/categoryActions'

const AllCategoryPage = () => {
   
    const dispatch=useDispatch();
    const loader=useSelector(state=>state.loading);
    const selector=useSelector(state=>state.GET_ALL_CATEGORY);

   
    useEffect(()=>{
        dispatch(categoryActions());
    },[]);

    
    return (
        <div style={{minHeight:'670px'}}>
       
            <CategoryContainer />
            <Pagination />
        </div>
    )
}

export default AllCategoryPage
