import axios from 'axios';
import React from 'react'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const navigate = useNavigate();
  const [product, setProduct]= useState([]);
  const update = async()=>{
    const result = await axios.put("http://localhost:6900/update",{
      "p_id": ref1.current.value, "p_name": ref2.current.value, "p_cost": ref3.current.value, "p_discount" : ref4.current.value
    })
  

      const {message} = result.data;
      if(message === "Product updated successfully"){
        alert("product updated sucessfully");
        navigate("/");
      }
      else{
        navigate("/update");
      }
  
  }

  return (
    <div>
        <fieldset>
          <legend>Update Product</legend>

          <input type="number" ref={ref1} placeholder='enter the product id' />
          <br /><br />

          <input type="name" ref={ref2} placeholder='enter product name' />
          <br /><br />

          <input type="number" ref={ref3} placeholder='enter product cost' />
          <br /><br />

          <input type="number" ref={ref4} placeholder='enter product discount'/>
          <br /><br />

          <button onClick={update}>Update</button>
        </fieldset>
    </div>
  )
}

export default Update
