import React from 'react';
import './login.css';

function Login () {
    return (
      <div className="Login">
           <section className='login'>
    <div class="login-box">
        <form action="index.html" id="loginForm">
            <h2>Login</h2>
            <div class="input-box">
                <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                <input type="email" required/>
                <label>Email</label>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                <input type="password" required/>
                <label>Password</label>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="123">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div class="register-link">
                <p>Don't have an account? <a href="123" id="toggleRegister">Register</a></p>
            </div>
        </form>

        <form id="registerForm" style={{display: 'none'}}>
            <h2>Register</h2>
            <div class="input-box">
                <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                <input type="text" required/>
                <label>User name</label>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                <input type="email" required/>
                <label>Email</label>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                <input type="password" required/>
                <label>Password</label>
            </div>
            <button type="submit">Register</button>
            <div class="register-link">
                <p>Already have an account? <a href="123" id="toggleLogin">Login</a></p>
            </div>
        </form>
    </div>
    </section>
      </div>

    );
 }
    
export default Login;