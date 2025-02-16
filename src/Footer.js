import Logo from "./icon/Logo.svg";

function Footer(){
    return(
        <footer>
            <div className="grid-adjustable-columns footerNav">
                <img id="logo" src={Logo}/>
                <div>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservations</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Twitter</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <address>Address</address>
                        <div>Contact</div>
                        <div>Email</div>
                    </ul>
                </div>
            </div>
            <div>Little Lemon, 2025</div>
        </footer>
    );
}

export default Footer;