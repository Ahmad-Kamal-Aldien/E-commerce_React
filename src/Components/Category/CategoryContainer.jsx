import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';

import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import categoryActions from '../../Redux/Actions/categoryActions'
const CategoryContainer = () => {

    
    const dispatch=useDispatch();
       
    useEffect(()=>{
        dispatch( categoryActions()  );
    },[]);
    
    const getCategory=useSelector(state=>state.allCategory.category);
    const getLoader=useSelector(state=>state.allCategory.loading);

 

    let color=["#F4DBA4","#F4DBA4","#0034FF","#F4DBA4","#FF6262","#F4DBA4"]


    return (
        <Container >
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
                {
                    getCategory.data ?(
                        getCategory.data.map( (item,index)=>{
                            return (

                                <CategoryCard key={index} title={item.name}
                                 img={item.image} background={
                                    color[Math.floor( Math.random()*5 +1 ) ]
                                 } />

                            )
                        } )
                    ):<h2>No Data</h2>
                }
                
            </Row>
        </Container>
    )
}

export default CategoryContainer
