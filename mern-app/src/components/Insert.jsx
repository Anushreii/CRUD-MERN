import React from 'react'
import axios from 'axios'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Insert = () => {
    const p_id = useRef(null);
    const p_name = useRef(null);
    const p_cost = useRef(null);
    const p_discount = useRef(null);

    const navigate = useNavigate();

    const save = async() => {
      const result = await axios.post("http://localhost:6900/insert",{
        "p_id":p_id.current.value,
        "p_name":p_name.current.value,
        "p_cost":p_cost.current.value,
        "p_discount":p_discount.current.value,
       });

       //console.log(result);
       const {message} = result.data;
        // alert(message);
       // navigate("/");
       if(message === "Product added successfully"){
           alert("Product added successfully");
           navigate("/");
       }else{
        navigate("/insert");
       }

    }


  return (
    <div>
      <fieldset>
        <legend>Insert Product</legend>

        <input type="number" ref={p_id} placeholder='enter the id' />
        <br /><br />

        <input type="text" ref={p_name}  placeholder='enter product name'/>
        <br /><br />

        <input type="number" ref={p_cost} placeholder='enter product cost' />
        <br /><br />

        <input type="number" ref={p_discount} placeholder='enter product discount' />
        <br /><br />

        <button onClick={save}>Save</button>
      </fieldset>
    </div>
  )
}

export default Insert
