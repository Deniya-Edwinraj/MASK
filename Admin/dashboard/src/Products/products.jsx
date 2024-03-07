import { useState } from "react";
import ProductTable from "./ProductTable";
import EditProductForm from "./EditProductForm";
import './Products.css';
import AddProductForm from "./AddProductForm";

function Products() {

const usersData = [
    // {id:1,name:'Logesh',username:'jvlogesh'},
    // {id:2,name:'Ramesh',username:'rameshtr'},
    // {id:3,name:'Daniel',username:'danielradcliff'},
];

const addproduct = (product)=>{
    product.id = products.length + 1;
    setproduct([...products,product])
}
// const deleteProduct = (id)=>{
//     setproduct(products.filter((product)=>product.id!==id))
//     setEditing(false);
// }
const deleteProduct = async (id) => {
  try {
    await fetch(`http://localhost:5000/api/product/${id}`, {
      method: 'DELETE',
    });

    console.log('Product deleted:', id);

    // Update the state to remove the deleted product from the table
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    setEditing(false);

    console.log('Products after deletion:', products);
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

    const [products,setproduct] = useState(usersData);
    const [editing,setEditing] = useState(false)


    const initialFormState = {id:null,name:'',price:''}

    const [setProduct,setCurrentProduct] = useState(initialFormState);

    const editRow = (product)=>{
        setEditing(true);
        setCurrentProduct({id:product.id,name:product.name,price:product.price});
    }

    const updateProduct = (id,updatedProduct)=>{
        setEditing(false);
        setproduct(products.map((product)=>(product.id===id?updatedProduct:product)))
    }

  return (
    <div className="container">
      <h1>Products Details of MASK</h1>
      <div className="flex-row">
        <div className="flex-large">
            {editing?(<div>
                <h2>Edit Product</h2>
                <EditProductForm 
                    setEditing={setEditing}
                    setProduct={setProduct}
                    updateProduct={updateProduct}
                />
            </div>):(<div>
                {/* <h2>Add Vendor</h2>
          <AddProductForm addproduct={addproduct} /> */}
          </div>
            ) 
        }
        </div>
        <div className="flex-large">
          {/* <h2>View Products</h2> */}
          <ProductTable editRow={editRow} deleteProduct={deleteProduct} products={products} />
        </div>
      </div>
    </div>
  );
}

export default Products;