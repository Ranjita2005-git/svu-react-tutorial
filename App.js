import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
/**
 * HeaderComponent
 * -Logo
 * -Nav Items
 * 
 * BodyComponent
 * -Search Bar
 * -Resturant container
 *    -Resturant Card
 * 
 * FooterComponent
 * Copyright
 * Links
 * 
 */

const HeaderComponent =()=>{
    return(
        <div className="header">
            <img src="https://img.magnific.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?semt=ais_hybrid&w=740&q=80" alt="Logo"/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

const resImgStyle = {
    width:"200px",
}

const ResturantCard =()=>{
    return(
        <div className="res-card">
            <img style={resImgStyle} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1675111160/7c1b240d3988d5e7c3cb1371a4693400.jpg" alt="Resturant Image"/>
            <div className="res-details">
                <h3>Resturant Name</h3>
                <h4>Review</h4>
            </div>
            <h4>Cusine</h4>
            <h4>Rating</h4>
            <h4>Price</h4>
            <h4>Address</h4>
            <h4>Distance</h4>
        </div>
    )
}


const BodyComponent =()=>{
    return(
        <div className="body">
            <div>Search</div>
            <div className="res-container">
                <ResturantCard/>
            </div>
        </div>
    )
}

const App =()=>{
    return(
        <div className="main">
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);