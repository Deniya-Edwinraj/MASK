// import React, { Component } from 'react';
// import './dec-orn.css';
// import { Link } from 'react-router-dom';
// import Custom from './custom'
// class Product extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       products: []
//     };
//   }

//   componentDidMount() {
//     fetch('http://localhost:5000/api/product/')
//       .then(response => response.json())
//       .then(data => {
//         this.setState({ products: data });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
// <>
// <Custom></Custom>

//           <h1 className='producth1'>Our Products</h1>
//      <div className = "filter-btns">
//          <button type = "button" className = "filter-btn" id = "all">all</button>
//          <button type = "button" className = "filter-btn" id = "Flower-Vases">Flower Vases</button>
//          <button type = "button" className = "filter-btn" id = "Wall-Hangers">Wall Hangers</button>
//          <button type = "button" className = "filter-btn" id = "Flower-Bouquets">Flower Bouquets</button>
//          <button type = "button" className = "filter-btn" id = "Lantern">Lanterns</button>
//               </div>



//               <div className = "products" >


//                 {/* card 1 */}
//                 <ul class="cd-items cd-container">
//                 {this.state.products.map(product => (

//                 <li class="cd-item vegetables" style={{display: "list-item"}} key={product.id}>
//                   <img src={require("./Assests/img/vase1.jpg")} alt="image1" className="card__img"/>
//                   <div className="card__data">
//                    <h3 className="card__title">{product.name}</h3>
//                    <h5 className="card__title">Rs: {product.price}</h5>
//                     <button className="card__button"> Add to cart </button>
//                   </div>
//                 </li>
//                       ))}
//                 </ul>
//               </div>
      

        

// </>

// );
// }
// }

// export default Product;

{this.state.products.map(product => (
    <div className="filter-item all Flower-Vases">
      <article className="card__article" key={product.id}>
        <img src={require("./Assests/img/vase1.jpg")} alt="image1" className="card__img" />
        <div className="card__data">
          <h3 className="card__title">{product.name}</h3>
          <h5 className="card__title">Rs: {product.price}</h5>
          <button className="card__button"> Add to cart </button>
        </div>
      </article>
    </div>
  ))}
  