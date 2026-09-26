import {memo} from "react";
const ResturantCard = (props) => {
    // console.log(props)
    console.log("Hello from ResturantCard component")
    return (
        <div className="res-card">
            <div className="res-img">
                <img style={{width: "200px",}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1675111160/7c1b240d3988d5e7c3cb1371a4693400.jpg" alt="Resturant Image" />
            </div>
            <div className="res-details">
                <h3>{props.resData.name}</h3>
                <h4>{props.resData.review}</h4>
            </div>
            <h4>{props.resData.cuisine}</h4>
            <h4>{props.resData.rating}</h4>
            <h4>{props.resData.price}</h4>
            <h4>{props.resData.address}</h4>
            <h4>{props.resData.distance}</h4>
        </div>
    )
}

export default memo(ResturantCard);