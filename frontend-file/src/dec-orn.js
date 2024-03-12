// import React, { useState, useEffect } from 'react';
// import './dec-orn.css';
// import Custom from './custom';

// const Product = () => {
//   // const [products, setProducts] = useState([]);
//   const addProductToCart = (product) => {
//     const newProduct = {
//       ...product,
//       count: 1,
//     };
  
//     setProductsInCart((prevProducts) => [...prevProducts, newProduct]);
  
//     // Other logic (e.g., showing a toast message) can be added here
//   };

//   useEffect(() => {
//     fetch('http://localhost:5000/api/product/')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//       <Custom></Custom>

//       <div className="wrapper" id="products">
//         <div className="category-filter">
//           <div className="container">
//             <div className="title">
//               <h1 className="producth1">Our Products</h1>
//             </div>
//             <div className="filter-btns">
//               <button type="button" className="filter-btn" id="all">
//                 all
//               </button>
//               <button type="button" className="filter-btn" id="Flower-Vases">
//                 Flower Vases
//               </button>
//               <button type="button" className="filter-btn" id="Wall-Hangers">
//                 Wall Hangers
//               </button>
//               <button type="button" className="filter-btn" id="Flower-Bouquets">
//                 Flower Bouquets
//               </button>
//               <button type="button" className="filter-btn" id="Lantern">
//                 Lanterns
//               </button>
//             </div>

//             <div className="products">
//               <ul className="cd-items cd-container">
//                 {products.map(product => (
//                   <li
//                     className="cd-item filter-item vegetables"
//                     style={{ display: 'list-item' }}
//                     key={product.id}
//                   >
//                     <article className="card__article">
//                       <img
//                         src={require('./Assests/img/vase1.jpg')}
//                         className="card__img "
//                         alt="image1"
//                       />
//                       <div className="card__data">
//                         <h3 className="card__title">{product.name}</h3>
//                         <h5 className="card__title">Rs: {product.price}</h5>
//                         <button
//   className="card__button"
//   onClick={() => addProductToCart(product)}
// >
//   Add to cart
// </button>
//                       </div>
//                     </article>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product;



import React, { useState, useEffect } from 'react';
import './dec-orn.css';
import Custom from './custom';

const Product = (props) => {
  const [products, setProducts] = useState([]);
  const handleAddToCart = (product) => {
    props.addProductToCart(product); // call the addProductToCart function from the parent component
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/product/')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Custom></Custom>

      <div className="wrapper" id="products">
        <div className="category-filter">
          <div className="container">
            <div className="title">
              <h1 className="producth1">Our Products</h1>
            </div>
            <div className="filter-btns">
              <button type="button" className="filter-btn" id="all">
                all
              </button>
              <button type="button" className="filter-btn" id="Flower-Vases">
                Flower Vases
              </button>
              <button type="button" className="filter-btn" id="Wall-Hangers">
                Wall Hangers
              </button>
              <button type="button" className="filter-btn" id="Flower-Bouquets">
                Flower Bouquets
              </button>
              <button type="button" className="filter-btn" id="Lantern">
                Lanterns
              </button>
            </div>

            <div className="products">
              <ul className="cd-items cd-container">
                {products.map((product) => (
                  <li
                    className="cd-item filter-item vegetables"
                    style={{ display: 'list-item' }}
                    key={product.id}
                  >
                    <article className="card__article">
                      <img
                        src={require('./Assests/img/vase1.jpg')}
                        className="card__img "
                        alt="image1"
                      />
                      <div className="card__data">
                        <h3 className="card__title">{product.name}</h3>
                        <button className="card__button" onClick={() => handleAddToCart(product)}>Add to cart </button>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;








