// import React from 'react';
// import './customize.css';
// // import { Link } from 'react-router-dom';

// function Customize () {
//   return (
//     <div className="Customize">

// <div class="form-container">
//   <div class="testbox-cus">
//     <form action="" className='customize-form'>
//       <div class="banner-cus">
//         <h1> Customize As You Wish</h1>
//       </div>
//       <div class="item">
//         <p>Product Name</p>
//         <input type="text" name="name" required/>
//       </div>
//       <div class="item">
//         <p>Category</p>
//         <input type="text" name="category" required/>
//       </div>
//       <div class="item">
//         <p>Size</p>
//         <input type="text" name="category"/>
//       </div>
//       <div class="item">
//         <p>Colour</p>
//         <input type="text" name="category"/>
//       </div>
//       <div class="item">
//         <p>Extra Features that need to add</p>
//         <textarea rows="4" ></textarea>
//       </div>
//       <div class="btn-block">
//         <button class="btn5" type="submit" href="/">Add to cart</button>
//       </div>
//     </form>
//   </div>
//   </div>
   
//     </div>
//     );
//   }
  
//   export default Customize;


// import React from 'react'
// import './customize.css'
// import ModalComponent from './Modal'

// const Customize = () => {
//   return (
//     <div className="Customize">
//       <div class="form-container">
//         <div class="testbox-cus">
//           <form action="" className='customize-form'>
//             <div class="banner-cus">
//               <h1> Customize As You Wish</h1>
//             </div>
//             <div class="item">
//               <p>Product Name</p>
//               <input type="text" name="name" required />
//             </div>
//             <div class="item">
//               <p>Category</p>
//               <input type="text" name="category" required />
//             </div>
//             <div class="item">
//               <p>Size</p>
//               <input type="text" name="category" />
//             </div>
//             <div class="item">
//               <p>Colour</p>
//               <input type="text" name="category" />
//             </div>
//             <div class="item">
//               <p>Extra Features that need to add</p>
//               <textarea rows="4" ></textarea>
//             </div>
//             <div class="btn-block">
//               <ModalComponent buttonText="Add to cart">
//                 <p>Product added to cart!</p>
//               </ModalComponent>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Customize;

import React from 'react';
import './customize.css';
import ModalComponent from './Modal';

const Customize = () => {
  return (
    <div className="Customize">
      <div className="form-container">
        <div className="testbox-cus">
          <form action="" className="customize-form">
            <div className="banner-cus">
              <h1> Customize As You Wish</h1>
            </div>
            <div className="item">
              <p>Product Name</p>
              <input type="text" name="name" required />
            </div>
            <div className="item">
              <p>Category</p>
              <input type="text" name="category" required />
            </div>
            <div className="item">
              <p>Size</p>
              <input type="text" name="category" />
            </div>
            <div className="item">
              <p>Colour</p>
              <input type="text" name="category" />
            </div>
            <div className="item">
              <p>Extra Features that need to add</p>
              <textarea rows="4"></textarea>
            </div>
            <div className="btn-block">
              <ModalComponent buttonText="Add to cart">
                <p>Product added to cart!</p>
                <div className="btn-block">
                  <button className="btn5" onClick={ModalComponent.toggleModal}>
                    Close
                  </button>
                  <button
                    className="btn5"
                    onClick={() => {
                      // Handle the order logic here
                      console.log("Order placed!");
                      ModalComponent.toggleModal();
                    }}
                  >
                    Order
                  </button>
                </div>
              </ModalComponent>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Customize;
