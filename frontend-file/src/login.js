import React from 'react';
import './login.css';

function Login () {
    return (
      <div className="Login">
           <section className='login'>
    <div className="login-box">
        <form action="index.html" id="loginForm">
            <h2>Login</h2>
            <div className="input-box">
                <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                <input type="email" required/>
                <label>Email</label>
            </div>
            <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                <input type="password" required/>
                <label>Password</label>
            </div>
            <button className='btnlogin' type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account? <a href="123" id="toggleRegister">Register</a></p>
            </div>
        </form>

        <form id="registerForm" style={{display: 'none'}}>
            <h2>Register</h2>
            <div className="input-box">
                <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                <input type="text" required/>
                <label>User name</label>
            </div>
            <div className="input-box">
                <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                <input type="email" required/>
                <label>Email</label>
            </div>
            <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                <input type="password" required/>
                <label>Password</label>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
                <p>Already have an account? <a href="123" id="toggleLogin">Login</a></p>
            </div>
        </form>
    </div>
    </section>
      </div>

    );
 }
    
export default Login;