import Logo from "./icon/Logo.svg";

function Specials(){
    return(
        <div className="Specials">
            <section>
                <div id="specialsTitle">
                    <h1>This weeks specials!</h1>
                    <button>Online Menu</button>
                </div>
                <div id="specialsBody">
                    <div class="specialsItem">
                        <img src={Logo}/>
                        <div>
                            <div>
                                <h6>Greek Salad</h6>
                                <span>$12.99</span>
                            </div>
                            <div>
                                <p>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            </div>
                            <div>
                                <p>Order a delivery</p>
                                <img src=""/>
                            </div>
                        </div>
                    </div>

                    <div class="specialsItem">
                        <img src={Logo}/>
                        <div>
                            <div>
                                <h6>Bruchetta</h6>
                                <span>$12.99</span>
                            </div>
                            <div>
                                <p>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            </div>
                            <div>
                                <p>Order a delivery</p>
                                <img src=""/>
                            </div>
                        </div>
                    </div>

                    <div class="specialsItem">
                        <img src={Logo}/>
                        <div>
                            <div>
                                <h6>Lemon dessert</h6>
                                <span>$12.99</span>
                            </div>
                            <div>
                                <p>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            </div>
                            <div>
                                <p>Order a delivery</p>
                                <img src=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Specials;