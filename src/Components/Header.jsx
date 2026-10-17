import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Header = () => {
    let navigate=useNavigate()
    let visitToCartItems=()=>{        
        navigate(`/cart-items`)
    }
  return (
    <>
    <div className="header-part">
        {/* .logo+.search+.login+.cart */}
        <div className="logo">
            <img src="/Images/PrimeBasketLogo.png" height={75} onClick={() => navigate("/")}/>
        </div>
        <div className="search">
            <form>
                <input type="text" placeholder='Enter Product Name' />
                <button>Search</button>
            </form>
        </div>
        <div className="btns">
            <button className='login'>LOGIN</button>

            <button className='cart' onClick={visitToCartItems}> CART </button> 
            {/* <NavLink to='/cart-items'>CART</NavLink>  */}

        </div>
    </div>
    </>
  )
}

export default Header
