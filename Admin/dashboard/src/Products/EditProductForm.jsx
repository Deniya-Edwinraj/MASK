import { useEffect, useState } from "react";
import './Products.css';

const EditProductForm = (props)=>{
   const [product,setProduct] = useState(props.currentProduct)

   useEffect(()=>{
        setProduct(props.currentProduct)
   },[props])

   const handleInputChange = (event)=>{
    const {name,value} = event.target

    setProduct({...product,[name]:value})
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if(!product.name||!product.productname) return;
                props.updateUser(product.id,product);
            }
        }>
            <label>Name</label>
            <input type="text" onChange={handleInputChange} name="name" value={product.name} />
            <label>Price</label>
            <input type="email" onChange={handleInputChange} name="productname" value={product.email} />
            <button>Update product</button>
            <button className="button muted-button" onClick={()=>{
                props.setEditing(false)
            }}>Cancel</button>
          </form>
    )
}

export default EditProductForm;

