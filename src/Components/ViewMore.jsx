import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';



const ViewMore = () => 
    {
    let params= useParams()
    let productId=params.id

    const [oneProduct, setOneProduct] = useState({})
    let fetchApi=async()=>{
       let r= await axios.get(`http://localhost:4000/products/${productId}`)
        setOneProduct(r.data)

    }
    useEffect(()=>{
        fetchApi()
    },[])


    let {title, price, description, category, image, rating: {rate,count} = {}}  = oneProduct
    
    
    let navigate = useNavigate()
    let closecard = () => {
        navigate('/')
    }
    // toFormData: delete product from cart
    let handleDelete = async () => {
    let bool = window.confirm("Do you want to delete this product?")
    if(bool){
        await axios.delete(
            `http://localhost:4000/products/${productId}`
        )
        toast.success("Product Deleted Successfully")
        navigate('/')
    } 
    else{
        toast.info("Deletion Cancelled")
    }
   }
    let addToCart = async ()=>{
    let bool = window.confirm("Add Product to Cart?")
    if(bool){
        await axios.post(
            "http://localhost:4000/cartitems",
            oneProduct
        )
        toast.success("Added To Cart")
        navigate("/cart-items");
    }
    else{
        toast.info("Cancelled")
    }
   }
    
    return (
            <>
            <div className="viewmore-card">
                <div className="container">
                    <div className="left">
                        <img src={image} height={250}/>
                    </div>
                    <div className="v-line"></div>
                    <div className="right">
                        <div className="close" onClick={closecard}><CloseIcon/></div>
                        <p><span style={{color:"red"}}>Title :</span>  {title}</p>
                        <p><span style={{color:"red"}}>Price :</span> {price}</p>
                        <p><span style={{color:"red"}}>Description :</span> {description}</p>
                        <p><span style={{color:"red"}}>Category : </span>{category}</p>
                    <div className="btns">
                        <button className="cart" onClick={addToCart}><AddShoppingCartIcon />Add to Cart</button>
                        <button className='dlt' onClick={handleDelete}><DeleteIcon/>Delete</button>
                    </div>
                        
                    </div>
                </div>
            </div>
   </>
  )
}

export default ViewMore
