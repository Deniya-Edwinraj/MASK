import React from 'react';
import './dec-orn.css';
import { Link } from 'react-router-dom';

function Product () {
    return (
      <div className="Product">

{/* <!-- About --> */}
<section className="about" id="about">
  <div className="main">
    <img src={require("./Assests/img/dec hero.jpg")} alt='hero'/>
  </div>
  <div className="all-text">
    <h2>Are You Looking For The <br/>Meticulous Decorations</h2>
   <p><span>MASK</span> provide you with the paper flower decorations for celebrations like
    <ul>
      <li>Birthday Party</li>
      <li>Wedding</li>
      <li>Family get-together</li>
      <li>Reuions</li>
    </ul>
  </p>
   <h3>Join us for a unique experience !</h3>
  
  <div className="btn-button">
  <Link to="/booking">
   <button className="btn2"><img src={require("./Assests/img/buynow.png")} alt="icon" style={{height:'30px', width:'30px'}}/> Book Now</button>
   </Link>
  </div>
 </div>

</section>
{/* <!-- About End --> */}

{/* <!-- Products --> */}
<div className = "wrapper" id="products">
  <div className = "category-filter">
      <div className = "container">
          <div className = "title">
              <h1>Our Products</h1>
          </div>
          <div className = "filter-btns">
              <button type = "button" className = "filter-btn" id = "all">all</button>
              <button type = "button" className = "filter-btn" id = "Flower-Vases">Flower Vases</button>
              <button type = "button" className = "filter-btn" id = "Wall-Hangers">Wall Hangers</button>
              <button type = "button" className = "filter-btn" id = "Flower-Bouquets">Flower Bouquets</button>
              <button type = "button" className = "filter-btn" id = "Lantern">Lanterns</button>
          </div>
      <div className = "filter-items">
    {/* <!-- card 1 --> */}
        <div className = "filter-item all Flower-Vases">
          <article className="card__article">
            <img src={require("./Assests/img/vase1.jpg")} alt="image1" className="card__img"/>

            <div className="card__data">
              <h3 className="card__title">Brown Flower Vase</h3>
              <button className="card__button">Customize</button>
            </div>
          </article>
        </div>
    {/* <!-- card 2 --> */}
        <div className = "filter-item all Flower-Vases">
          <article className="card__article">
            <img src={require("./Assests/img/vase2.jpeg")} alt="image2" className="card__img"/>

            <div className="card__data">
              <h3 className="card__title">Stripe Vase </h3>
              <button className="card__button">Customize</button>
            </div>
          </article>
        </div>
    {/* <!-- card 3 --> */}
        <div className = "filter-item all Flower-Vases">
          <article className="card__article">
            <img src={require("./Assests/img/vase3.jpeg")} alt="image3" className="card__img"/>
            
            <div className="card__data">
              <h3 className="card__title">Round Roll Vase</h3>
              <button className="card__button">Customize</button>
            </div>
          </article>
        </div>
    {/* <!-- card4 --> */}
        <div className = "filter-item all Flower-Vases">
          <article className="card__article">
            <img src={require("./Assests/img/vase4.jpg")} alt="image4" className="card__img"/>
            
            <div className="card__data">
              <h3 className="card__title">Big Jaar Vase with quilled flowers and leaves</h3>
              <button className="card__button">Customize</button>
            </div>
          </article>
        </div>
    {/* <!-- card 5 --> */}
        <div className = "filter-item all Flower-Vases">
          <article className="card__article">
            <img src={require("./Assests/img/vase5.jpg")} alt="image5" className="card__img"/>

            <div className="card__data">
              <h3 className="card__title">Stripe vase </h3>
              <button className="card__button">Customize</button>
            </div>
          </article>
        </div>  
    {/* <!-- card 6 --> */}
        <div className = "filter-item all Flower-Vases">
          <article className="card__article">
            <img src={require("./Assests/img/vase6.jpg")} alt="image6" className="card__img"/>

            <div className="card__data">
              <h3 className="card__title">Cuboid Vase </h3>
              <button className="card__button">Customize</button>
            </div>
          </article>
        </div>   
    {/* <!-- card 7 --> */}
        <div className = "filter-item all Wall-Hangers">
          <article className="card__article">
            <img src={require("./Assests/img/wallhanger1.jpg")} alt="image7" className="card__img"/>
    
            <div className="card__data">
              <h3 className="card__title">Wall hanger with mirror </h3>
              <button className="card__button">Customize</button>
            </div>
          </article>
        </div>
    {/* <!-- card 8 --> */}
    <div className = "filter-item all Wall-Hangers">
      <article className="card__article">
        <img src={require("./Assests/img/wallhanger2.jpeg")} alt="image8" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">Dots Wall Hanger </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div> 
    {/* <!-- card 9 --> */}
    <div className = "filter-item all Wall-Hangers">
      <article className="card__article">
        <img src={require("./Assests/img/wallhanger3.jpeg")} alt="image9" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">Stripe paper net with flowers </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div>
    {/* <!-- card 10 --> */}
    <div className = "filter-item all Wall-Hangers">
      <article className="card__article">
        <img src={require("./Assests/img/wallhanger4.png")} alt="image10" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">Tree Wall Hanger </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div>
    {/* <!-- card 11 --> */}
    <div className = "filter-item all Wall-Hangers">
      <article className="card__article">
        <img src={require("./Assests/img/wallhanger5.png")} alt="image11" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">Wall hanger with full of quilled paper works </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div>
    {/* <!-- card 12 --> */}
    <div className = "filter-item all Wall-Hangers">
      <article className="card__article">
        <img src={require("./Assests/img/wallhanger6.png")} alt="image12" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">Authentic Wall Hanger </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div>
    {/* <!-- card 13 --> */}
    <div className = "filter-item all Flower-Bouquets">
      <article className="card__article">
        <img src={require("./Assests/img/bouquet1.jpg")} alt="image13" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">You can </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div> 
    {/* <!-- card 14 --> */}
    <div className = "filter-item all Flower-Bouquets">
      <article className="card__article">
        <img src={require("./Assests/img/bouquet2.jpg")} alt="image14" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">You can </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div> 
    {/* <!-- card 15 --> */}
    <div className = "filter-item all Flower-Bouquets">
      <article className="card__article">
        <img src={require("./Assests/img/bouquet3.jpeg")} alt="image15" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">You can </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div> 
    {/* <!-- card 16 --> */}
    <div className = "filter-item all Flower-Bouquets">
      <article className="card__article">
        <img src={require("./Assests/img/bouquet4.jpg")} alt="image16" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">You can </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div> 
    {/* <!-- card 17 --> */}
    <div className = "filter-item all Flower-Bouquets">
      <article className="card__article">
        <img src={require("./Assests/img/bouquet5.jpg")} alt="image17" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">Paper Ribbon Rose Bouquet </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div>
    {/* <!-- card 18 --> */}
    <div className = "filter-item all Flower-Bouquets">
      <article className="card__article">
        <img src={require("./Assests/img/bouquet6.jpg")} alt="image18" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">Multicoloured Wedding Bouquet </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div>       
    {/* <!-- card 19 --> */}
        <div className = "filter-item all Lantern">
          <article className="card__article">
            <img src={require("./Assests/img/lan1.jpeg")} alt="image19" className="card__img"/>
    
            <div className="card__data">
              <h3 className="card__title">Multicoloured Lantern </h3>
              <button className="card__button">Customize</button>
            </div>
          </article>
        </div>    
    {/* <!-- card 20 --> */}
    <div className = "filter-item all Lantern">
      <article className="card__article">
        <img src={require("./Assests/img/lan2.jpeg")} alt="image20" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">Multicoloured Lantern </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div>  
    {/* <!-- card 21 --> */}
    <div className = "filter-item all Lantern">
      <article className="card__article">
        <img src={require("./Assests/img/lan3.jpeg")} alt="image21" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">Petal Like Lantern </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div>  
    {/* <!-- card 22 --> */}
    <div className = "filter-item all Lantern">
      <article className="card__article">
        <img src={require("./Assests/img/lan4.jpeg")} alt="image22" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">Multicoloured Lantern </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div>    
    {/* <!-- card 23 --> */}
    <div className = "filter-item all Lantern">
      <article className="card__article">
        <img src={require("./Assests/img/lan5.jpg")} alt="image23" className="card__img"/>

        <div className="card__data">
          <h3 className="card__title">Painted Lantern </h3>
          <button className="card__button">Customize</button>
        </div>
      </article>
    </div>   
                {/* <!-- Card End --> */}
          </div>
      </div>
  </div>
</div>
{/* <!-- Products End --> */}

      </div>
    );
 }
       
export default Product;
