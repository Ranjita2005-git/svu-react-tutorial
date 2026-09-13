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

const HeaderComponent = () => {
    return (
        <div className="header">
            <img src="https://img.magnific.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?semt=ais_hybrid&w=740&q=80" alt="Logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

const resImgStyle = {
    width: "200px",
}

const resDetails = [
    {
        name: "Chicken Mirch Masala",
        review: 4.3,
        cuisine: "Indian",
        rating: 4.3,
        price: "₹200 for one",
        address: "123 Main Street",
        distance: "2 km"
    },
    { name: "wakao", 
        review: 4.5, 
        cuisine: "Japanese", 
        rating: 4.5, 
        price: "₹300 for one", 
        address: "456 Oak Avenue", 
        distance: "3 km" 
    }
]

const ResturantCard = (props) => {
    console.log(props)
    return (
        <div className="res-card">
            <div className="res-img">
                <img style={resImgStyle} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1675111160/7c1b240d3988d5e7c3cb1371a4693400.jpg" alt="Resturant Image" />
            </div>
            <div className="res-details">
                <h3>{props.name}</h3>
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
const BodyComponent = () => {
    return (
        <div className="body">
            <div>Search</div>
            <div className="res-container">
                <ResturantCard name="Chicken Mirch Masala" />
                <ResturantCard name="wakao" />
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className="main">
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);