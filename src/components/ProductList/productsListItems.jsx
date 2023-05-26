
import "./productList.css"
import axios from "axios"
const ProductListItem = (product) => {
 
  const addToCart = async (props) => {
    let productItem = {
      productId: props._id,
    productName: props.name,
    count:1,
    imgProduct: props.img,   
    price: props.price,
    }
    console.log(productItem)
    try {
      const res = await axios.patch("/cart/add/", productItem);
      alert("The product was added to cart")
    } catch (err) {
      console.log(err)
    }
  };
        
    return (
      <div className="list">
        <div className="card-product">
        <div>
          <img src={product.img} alt={product.name} />
        </div>
        <div className="card-content">
        <span className="card-title">{product.name}</span>
          <p>{product.desc.slice(0,60)}...</p>
          <p>{product.price}$</p>
        </div>
        <button className="btn-list" onClick={e =>addToCart(product)}>Add to card</button>
        </div>
        </div> );
}
 
export default ProductListItem;