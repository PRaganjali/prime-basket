import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const LandingPage = () => 
  {
    //todo: fetc api using axios

  let [apidata,setApidata]=useState([])
  let fetchApi=async ()=>
  {
    let response=await axios.get(`http://localhost:4000/products`)
    setApidata(response.data)
    setFilteredArray(response.data);   
  }
  useEffect(()=>{
    fetchApi()
  }, [])  
   
  // console.log(apidata)


//function to navigate 
let navigate=useNavigate()
let viewMore=(id)=>{
  navigate(`/viewmore/${id}`)
}



// todo:Filter categories
let [filteredArray , setFilteredArray]=useState([])
  useEffect(()=>{
    setFilteredArray(apidata)
  },[apidata])

    let allCategories=["All","men's clothing","women's clothing","jewelery","electronics"]
  
    let handleCategoryBtn=(e)=>
    {
        let btnName=(e.target.innerText)
        if(btnName === 'All')
        {
          setFilteredArray(apidata)
        }else{
          let res=apidata.filter((elem)=>{
          return elem.category===btnName
        })
        setFilteredArray(res)
        } 
        
        // console.log(res)
    }

  return (
    <>
    <div className="products">
                <div className="category">
                    <ul>
                        {allCategories.map((elem,i)=>{
                          return(
                            <li>
                                 <button onClick={handleCategoryBtn}>{elem}</button>
                            </li>
                          )
                        })}
                    </ul>
                
            </div>
      <div className="container">
        {filteredArray.map((e,i)=>{
          let {id,title,image, price}=e
          return (
            <div className="card">
                <div className="image">
                  <img src={image} alt="" />
                </div>
                <div className="title">{title}</div>
                <div className="price">Rs.{Math.floor(price*90)}.00/-</div>
                <button onClick={()=>viewMore(id)}>View More</button>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default LandingPage
