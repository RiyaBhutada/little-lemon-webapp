import Food from "./assets/images/restaurantfood.jpg";

function CallToAction(){
    return(
        <section className="CallToAction">
            <div id="CallToActionDiv">
                <div class="CallToActionDivElement">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <div class="CallToActionDivElement">
                    <h5>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h5>
                </div>
                <div class="CallToActionDivElement">
                    <button>Reserve a Table</button>
                </div>
            </div>
            <img id="restaurantFood" src={Food}/>
        </section>
    );
}

export default CallToAction;