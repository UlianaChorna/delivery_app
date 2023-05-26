import React, { useEffect, useState } from 'react'
import axios from "axios"
import TextField from '@mui/material/TextField';
import "./pages.css"
import Box from '@mui/material/Box';
import { InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';





function ShoppingCartPage() {

  const [userCart, setUserCart] = useState({});
  
  useEffect(() => {
    const getUserCart = async () => {
      try {
        const res = await axios.get("/cart/");
        setUserCart(res.data)
      } catch (err) {
        console.log(err)
      }
    };
      getUserCart()  
  }, [])
  
  const incrementCount = (el) => {
    let count = el.count + 1;
    updateProductCount(el, count);
  };

  const decrementCount = (el) => {
    let count = el.count - 1;
    console.log(el,count)
    updateProductCount(el, count);
  };

     const updateProductCount = async (el, count) => {
      let productItem = {
        ...el,
        count: count
      }
      console.log(productItem)
      try {
        const res = await axios.patch("/cart/add/", productItem);
        setUserCart(res.data)
      } catch (err) {
        console.log(err)
      }
    };
  
  const handleMouseLeave = (e) => {
    if (userCart) {
      updateUserCart(userCart)  
    }
  };

  const updateUserCart = async (cart) => {
    try {
      const res = await axios.put("/cart/", cart);
      setUserCart(res.data)
    } catch (err) {
      console.log(err)
    }
  };


  const handleChange = (e) => {
    const value = e.target.value;

    setUserCart({ ...userCart, [e.target.name]: value })
  };

  const handleSubmit = (e) => {
    let cart = {
      ...userCart,
      isCompleted: true
    }
  
    alert("Your order is completed")
    console.log(userCart)
    updateUserCart(cart) ;
  };

  const handleCancel = (e) => {
    const deleteUserCart = async () => {
      try {
        const res = await axios.delete("/cart/" + userCart._id);
        setUserCart({})
      } catch (err) {
        console.log(err)
      }
    };
    deleteUserCart() 
  }

  return (
    <div className='shopping-page'>
     
      <div className='form'>
      <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& > :not(style)': { m: 1, width: '300px' },
      }}
      noValidate
      autoComplete="off"
    >
      <InputLabel htmlFor="input-with-icon-adornment">
         Name
        </InputLabel>
     <TextField
      id="standard-basic" 
 
      name='name' 
      variant="standard"
       onMouseLeave={handleMouseLeave} 
       onChange={handleChange} 
       value={userCart ? userCart.name : ""} />
       <InputLabel htmlFor="input-with-icon-adornment">
         Email:
        </InputLabel>
     <TextField 
     id="standard-basic"  
     name='email' 
     variant="standard" 
     onMouseLeave={handleMouseLeave}
      onChange={handleChange} 
      value={userCart ? userCart.email : ""}/>
     <InputLabel htmlFor="input-with-icon-adornment">
         Address:
        </InputLabel>
        <TextField id="standard-basic" 
         name='address'
          variant="standard" 
         onMouseLeave={handleMouseLeave}
          onChange={handleChange} 
          placeholder={userCart ? userCart.address : ""}/>
        <InputLabel htmlFor="input-with-icon-adornment">
         Phone:
        </InputLabel>
        <TextField id="standard-basic" 
         name='phone' 
         variant="standard" 
         onMouseLeave={handleMouseLeave}
          onChange={handleChange} 
           placeholder={userCart ? userCart.phone : ""}/>
    </Box>
      </div>
      <div className='shopping-list'>
         <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="border-0 bg-light">
                    <div className="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Quantity</div>
                  </th>
                </tr>
              </thead>
              <tbody>
               
                 
                  {userCart && userCart.productList ?
                   (userCart.productList.map((el) => 
                  
                   <tr key={el._id} >
                    <td scope="row" className="border-0">
                    <div className="name-order p-2 ">
                      <img src={el.imgProduct} alt="" width="70" className="img-fluid rounded shadow-sm"/>
                      <div className="ml-3  align-middle">
                        <h5 className="mb-0 text-dark  align-middle"> {el.productName}</h5>
                      </div>
                    </div>
                  </td>
                  <td className="border-0 align-middle"><strong>{el.totalPrice}$</strong></td>
                  <td className="border-0 align-middle"><button onClick={e => incrementCount(el)}>+</button><strong>{el.count}</strong><button onClick={e => decrementCount(el)}>-</button></td>
                
                  </tr>
                  ))
                  :
                  (null)}
                  
                  
               
              <td>
                <span className="text-dark d-inline-block align-middle">
                Total price : {userCart ? userCart.totalPrice : null} $
                </span>
              </td>
               
              </tbody>
            </table>
          </div> <Link to ="/"> <button className='btn-shop' onClick={handleCancel}>
      
        Cancel</button> </Link>
     <button className='btn-shop' onClick={handleSubmit} >Submit</button>
          </div>
          
        </div>
   
  
  )
}

export default ShoppingCartPage