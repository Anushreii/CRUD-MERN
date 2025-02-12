 import axios from 'axios';
 import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 import { useParams } from "react-router-dom"

const Update = () => {
  const navigate  = useNavigate();
  const { p_id, p_name, p_cost, p_discount } = useParams();
  console.log("Params:", { p_id, p_name, p_cost, p_discount });

   const  [product, setProduct] = useState({
     "p_id":parseInt(p_id) || "" ,
     "p_name":p_name || "",
     "p_cost": parseInt(p_cost) || "",
     "p_discount":parseInt(p_discount) || "" });

     const submit_data = async(event)=>{
      event.preventDefault();
     // console.log(product);
     const {data} = await axios.put("http://localhost:6900/update", product)
     const {message} = data;
     if(message === "Product updated successfully"){
      navigate("/");
     }else{
      navigate("/update");
     }
 }
     const func_one =(event)=>{
      setProduct({...product,[event.target.name]: event.target.value});
     }

  return (
    <div>
      <form onSubmit={submit_data}>
          <input type="number" name='p_id' value={product.p_id} onChange={func_one} />
          <br /><br />
          <input type="text" name='p_name' value={product.p_name} onChange={func_one} />
          <br /><br />
          <input type="number" name='p_cost' value={product.p_cost} onChange={func_one} />
          <br /><br />
          <input type="number" name='p_discount' value={product.p_discount} onChange={func_one} />
          <br /><br />
          <input type="submit" value={"Update"} />
      </form>
    </div>
  )
}
export default Update
