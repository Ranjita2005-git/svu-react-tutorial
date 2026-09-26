import {resDetails} from "../utils/resturantDetails";
import ResturantCard from "./ResturantCard"
import {memo, useState, useCallback, useEffect } from 'react';
export const BodyComponent = () => {
    // let listOfResturant = resDetails;
    // super power of reaact
    // useState hook is a state management of react. this is a normal javascript function.
    // React.useState()
    // useState()

    const [listOfResturant, setListOfResturant] = useState(resDetails);

    const update = useCallback(()=>{
        console.log("Hi, how are you?",listOfResturant)
    },[listOfResturant]);

    console.log("Hello from parent component")
    return (
        <div className="body">
            <div>Search</div>
            <button className="top-rated-btn"
            onClick={()=>{
                update()
              const resData = listOfResturant.filter((res)=>res.rating>4);
              console.log("listOfResturant",listOfResturant)
              setListOfResturant(resData)
            }}
            >Top Rated Restaurants</button>
            <div className="res-container">
                {
                    listOfResturant.map((res,index)=>{
                        return <ResturantCard key={res.id} 
                        resData={res} update={update}/>
                    })
                }
            </div>
            <ChildComp update={update}/>
        </div>
    )
}

const ChildComp =memo (({listOfResturant})=>{
    console.log("Hello from child component")
    return(<div>Hello</div>)
})

export default BodyComponent;