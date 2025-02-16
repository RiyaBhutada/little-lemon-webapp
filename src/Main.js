import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomerSay from './CustomerSay';
import Chicago from './Chicago';

function Main(){
    return(
        <main className="Main">
            <div>
                <CallToAction/>
                <Specials/>
                <CustomerSay/>
                <Chicago/>
            </div>
        </main>
    );
}

export default Main;