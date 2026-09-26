import ReactDOM from "react-dom/client";
import "./style.css";
import HeaderComponent from "./src/components/HeaderComponent.js";
import BodyComponent from "./src/components/BodyComponent.jsx";

const App = () => {
    return (
        <div className="main">
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
}
// console.log("====>",<App />)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

