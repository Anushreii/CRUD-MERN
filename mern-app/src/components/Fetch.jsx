import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const Fetch = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const fetch = async()=>{
       const res = await axios.get('http://localhost:6900/productsList');
          const{data}=res;   
           setProduct(data); 
        }

            useEffect(()=>{
                fetch();
            },[product]);

    const insert = ()=>{
        navigate("/insert");
    }

    const edit_rec = (p_id, p_name, p_cost, p_discount )=>{
        console.log(p_id, p_name, p_cost, p_discount);
        navigate(`/update/${p_id}/${p_name}/${p_cost}/${p_discount}`);
    }
 
    

    const delete_rec =(p_id)=>{
       const res = axios.delete('http://localhost:6900/delete', {"data":{"p_id":p_id}});
       console.log(res);
    }


    return(
        <>
         <button onClick={insert}>Insert</button>

         <table border={1}
         align='center' 
         cellPadding={10}
         cellSpacing={10}>

            <thead>
                <tr>
                    <th>_id</th>
                    <th>p_id</th>
                    <th>p_name</th>
                    <th>p_cost</th>
                    <th>p_discount</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>

                <tbody>
                    {
                        product.map((element,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{element._id}</td>
                                    <td>{element.p_id}</td>
                                    <td>{element.p_name}</td>
                                    <td>{element.p_cost}</td>
                                    <td>{element.p_discount}</td>
                                    <td>
                                        <i className='fa fa-edit' onClick={()=> edit_rec(
                                            element.p_id, element.p_cost, element.p_name, element.p_discount)}></i>
                                    </td>
                                    <td>
                                        <i className='fa fa-trash' onClick={()=> delete_rec(element.p_id)}></i>
                                        {/* <i className='fa fa-trash' style={{ fontSize: '60px', color: 'red' }}></i> */}
                                    </td>

                                </tr>
                            )

                        })
                    }
                </tbody>
            
         </table>
        </>
    )
}
export default Fetch;