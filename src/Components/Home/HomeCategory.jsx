import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';

import { useDispatch, useSelector } from 'react-redux';
 import categoryActions from '../../Redux/Actions/categoryActions'
const HomeCategory = () => {

    const dispatch=useDispatch();
       
    useEffect(()=>{
        dispatch( categoryActions()  );
    },[]);
    
    const getCategory=useSelector(state=>state.allCategory.category);
    const getLoader=useSelector(state=>state.allCategory.loading);

 

    let color=["#F4DBA4","#F4DBA4","#0034FF","#F4DBA4","#FF6262","#F4DBA4"]

    return (
        <Container>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    
                    getCategory.data ?(
                        getCategory.data.slice(0,5).map((item,index)=>{
                        return (
                        <CategoryCard key={item.id} title={item.name} img={item.image} 
                        
                        background={color[index] } />
                        )
                        } )
                    ):<h2>No Data</h2>
                }

            </Row>
        </Container>
    )
}

export default HomeCategory
