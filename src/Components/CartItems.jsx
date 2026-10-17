import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate, useParams } from 'react-router-dom'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const CartItems = () => 
{
    let [cartData, setCartData] = useState([])    
   
    let fetchCartItems = async () => {
        let response = await axios.get(`http://localhost:4000/cartitems`)
        setCartData(response.data)
    }
    useEffect(()=>{
            fetchCartItems()
        },[])


    let handleDelete = async (id) => {
    let bool = window.confirm("Do you want to delete this product?")
    if(bool){
        await axios.delete(
            `http://localhost:4000/cartitems/${id}`
        )
        toast.success("Product Deleted Successfully")
        fetchCartItems(); 
        // navigate('/')
    }
    else{
        toast.info("Deletion Cancelled")
    }
   }
   const navigate = useNavigate();
   let exitToHome=()=>{
    navigate('/')
   }
   
    return (
        <>
            <div className="cart-container">
                <div className="exitToHomePage" 
                onClick={exitToHome}
                ><ExitToAppIcon/>Exit To Home Page</div>
                
                <h1>Cart Items</h1> 
                                
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Tittle</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Count</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartData.map((e) => {
                                let{id,image,title,category,price,rating:{rate,count}}=e
                                return (                                    
                                    <tr>
                                        <td>{id}</td>
                                        <td>
                                            <img
                                                src={image}
                                                alt={title}
                                                height="80"
                                                width="80"
                                            />
                                        </td>
                                        <td>{title}</td>
                                        <td>{category}</td>
                                        <td>Rs.{price}</td>
                                        <td>{rate}</td>
                                        <td>{count}</td>
                                        <td><button onClick={() => handleDelete(id)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CartItems