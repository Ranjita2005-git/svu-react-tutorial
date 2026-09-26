import {logoImg} from './../utils/resturantDetails'
const HeaderComponent = () => {
    return (
        <div className="header">
            <img src={logoImg} alt="Logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default HeaderComponent;