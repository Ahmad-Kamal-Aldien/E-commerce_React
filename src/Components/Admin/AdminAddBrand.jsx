import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import avatar from '../../assets/images/avatar.png'

const AdminAddBrand = () => {

    const[img,setImg]=useState(avatar);
    const[brand,setBrand]=useState('');

    const showImage=(event)=>{
        setImg(URL.createObjectURL(event.target.files[0]))
    }
    const sendData=(event)=>{
        
        event.preventdefault();

    }
   
      
   
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضف ماركه جديده</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره الماركه</div>

                    <div>
                    <label htmlFor="imageBrand" >
                        <img  src={img} alt="" height="100px" width="120px" />
                        </label>
                        
                        <input onChange={showImage} type="file" id="imageBrand" /> 

                    </div>
                        
                    {/* <img src={avatar} alt="" height="100px" width="120px" /> */}


                    <input 
                   
                   onChange={  (e)=>setBrand(e.target.value)  }
                   value={brand}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الماركه"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={sendData} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddBrand
