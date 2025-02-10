import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Fetch = () => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:6900/productsList').then((res)=>{
          console.log(res.data);   
           setProduct(res.data); 
        }, (error)=>{
            console.log(error);
        })
    },[])

    return(
        <>
         <table border={1} 
         cellPadding={10}
         cellSpacing={10}>

            <thead>
                <tr>
                    <th>_id</th>
                    <th>p_id</th>
                    <th>p_name</th>
                    <th>p_cost</th>
                    <th>p_discount</th>
                </tr>
            </thead>

                <tbody>
                    {
                        product.map((element,index)=>{
                            return(
                                <tr key={index}>
                                    <th>{element._id}</th>
                                    <th>{element.p_id}</th>
                                    <th>{element.p_name}</th>
                                    <th>{element.p_cost}</th>
                                    <th>{element.p_discount}</th>

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