import React from 'react';
import './style.css'

function header(){

    return (
        <>
            <header>
                <h1>hello</h1>
            <nav className="navbar">
                <div className="logo">
                    <span>FUTURE TIME</span>
                </div>
                <div className="search-bar">
                </div>
                <ul className="nav-links">
                    <li><a href="#"><i class="fas fa-home" style="color:rgb(140, 232, 232)"></i>HOME</a></li>
                    <li><a href="#"><i class="fas fa-heart" style="color:blueviolet"></i>WISHLIST</a></li>
                    <li><a href="#"><i class="fas fa-shopping-cart" style="color:rgb(140, 232, 232)"></i>CART ITEM</a></li>
                    <li><a href="#"><i class="fas fa-phone" style="color:rgb(140, 232, 232)"></i>CONTACT US</a></li>
                    <li><a href="#"><i class="fas fa-user-circle" style="color:rgb(140, 232, 232)"></i>PROFILE</a></li>
                </ul>
            </nav>
            </header>
        </>
    )
}

export default header 