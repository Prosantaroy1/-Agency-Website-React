import Aboutsec from "../About Section/Aboutsec";
import Banner from "../Banner/Banner";
import ClientSec from "../Client section/ClientSec";
import ProductSec from "../Product Section/ProductSec";
import Testimonial from "../Testimonial Section/Testimonial";

const Home = () => {
    return (
        <div>
            {/* <Banner/> */}
            <ClientSec/>
            <Aboutsec/>
            <ProductSec/>
            <Testimonial/>
        </div>
    );
};

export default Home;