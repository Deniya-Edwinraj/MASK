import './Assests/bootstrap/css/bootstrap.min.css';
import './Assests/bootstrap-icons/bootstrap-icons.min.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import ShoppingCart from './cart';
import { GiShoppingBag } from "react-icons/gi";


function Header () {
const [loggedIn, setLoggedIn] = useState(false);
const [isAdmin, setIsAdmin] = useState(false);

const products = [
	{
		id: 1,
		name: "Vivamus vitae",
		rating: 4.3,
		description:
			"Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
		price: 199,
	},
	{
		id: 2,
		name: "Fusce sit amet ipsum",
		rating: 4.2,
		description:
			"Maecenas fermentum urna egestas urna ullamcorper sodales. Sed a enim imperdiet, tempus massa a, iaculis tellus.",
		price: 229,
	}
];
const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

useEffect(() => {
  const isLoggedIn = sessionStorage.getItem('loggedIn');
  if (isLoggedIn) {
    setLoggedIn(true);
    const userRole = sessionStorage.getItem('userRole');
    if (userRole === 'admin') {
      setIsAdmin(true);
    }
  }
}, []);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('loggedIn');
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem('loggedIn', true);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('loggedIn');
    setLoggedIn(false);
    toast.success('Logout successful');
  };

    return (
      <div className="Header">
<ShoppingCart
  visibilty={cartsVisibilty}
  products={productsInCart}
  onClose={() => setCartVisible(false)}
  onQuantityChange={onQuantityChange}
  onProductRemove={onProductRemove}
/>

      <nav className="navbar navbar-expand-lg  navbar-dark" id="navbar">
        <div className="container-fluid">
        <img src={require("./Assests/img/logo.png")} alt="Logo" style={{ width: "5rem", height: "4rem" }} className="img-fluid" />
          <a className="navbar-brand" href="123">MASK</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto" style={{ gap: "1rem" }}>
              <li className="nav-item">
                <Link to='/' style={{ textDecoration: 'none' }}>
                <a className="nav-link " href="index.html">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <Link to="/services" style={{ textDecoration: 'none' }}>
                <a className="nav-link " href='services'>Services</a>
                </Link>
              </li>
              {isAdmin && (
                <li className="nav-item">
                  <Link to="http://localhost:5173/" style={{ textDecoration: 'none' }}>
                    <a className="nav-link " href='services'>Dashboard</a>
                  </Link>
                </li>
              )} 
          </ul>

          <button
  className="btn shopping-cart-btn"
  onClick={() => setCartVisible(true)}
>
  <GiShoppingBag size={24} />
  {productsInCart.length > 0 && (
    <span className="product-count">
      {productsInCart.length}
    </span>
  )}
</button>


            {!loggedIn && (
              <button className="btn-login p-2 my-lg-0 my-2" id="getStartedBtn" onClick={handleLogin}>
                <Link to="/login" style={{ textDecoration: 'none', color: '#000' }}>
                  <img src={require("./Assests/img/login.png")} alt="Login" style={{ height: '17px', width: '17px' }} /> Get Started
                </Link>
              </button>
            )}

            {loggedIn && (
              <button className="btn-login p-2 my-lg-0 my-2" id="getStartedBtn" onClick={handleLogout}>
                <i class="bi bi-box-arrow-right"></i> 
                Logout
              </button>
              
            )}

             

          </div>
        </div>
      </nav>

      </div>
    );
  }
  
  export default Header;

