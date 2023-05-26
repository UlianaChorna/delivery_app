
import ProductListItem from "./productsListItems";


const ProductList  = ({products =[]}) => {
    
    return ( 
        <>
     
    <div className="list">
        {products.map(el =>
            <ProductListItem key={el._id} {...el} />)}
    </div>
    </>
     );
}
 
export default ProductList;