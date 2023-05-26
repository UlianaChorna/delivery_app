import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList/productsList";
import ShopList from "../components/shopList";
import axios from "axios"

const ShopPage = () => {
  
    const [shopList, setShopList] = useState([])
    const [selectShop, setSelectShop] = useState(null)
    const [products, setProducts] = useState();

  useEffect(() => {
    const getShops = async () => {
      try {
        const res = await axios.get("/shop/");
        setShopList(res.data)
        if(res.data){
          setSelectShop(res.data[0])
        }

      } catch (err) {
        console.log(err)
      }
    };
    getShops()
  }, [])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("/product/find/" + selectShop._id);
        setProducts(res.data)

      } catch (err) {
        console.log(err)
      }
    };
    if (selectShop) {
        getProducts()
    }
   
  }, [selectShop])

   
    const handleShopSelect = item => {
        setSelectShop(item);
    }
  

        return (
            <div className="d-flex">
                {shopList && (
                    <div className="d-flex flex-column flex-shrink-0 p-2">
                        <ShopList
                            selectItem
                            items={shopList}
                            onItemSelect={handleShopSelect}
                            selectedItem={selectShop}
                        />
                  
                    </div>
                )}
                <div className="d-flex flex-column">
                    
                 
                    {products  &&
                        <ProductList
                            products={products} />}

                   
                </div>
                
            </div>
        );
    }
  

export default ShopPage;
