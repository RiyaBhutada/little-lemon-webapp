import Nav from './Nav';
import Logo from "./icon/Logo.svg";

function Header(){
    return(
        <div className="Header">
            <header className="grid-adjustable-header">
                <img id="logo" src={Logo}/>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservations</a></li>
                        <li><a href="">Order Online</a></li>
                        <li id="lastItem"><a href="">Login</a></li>
                    </ul>
                </nav>
            </header>
            {/* <Nav/> */}
        </div>
    );
}

export default Header;