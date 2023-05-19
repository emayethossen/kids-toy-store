import ExclusiveSec from "../ExclusiveSec/ExclusiveSec";
import Gallery from "../Gallery/Gallery";
import HeaderSec from "../HeaderSec/HeaderSec";
import NewArrival from "../NewArrivals/NewArrival";
import ShopCategory from "../ShopCategory/ShopCategory";
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div className="bg-[#ffe5ea] pb-20">
            <Helmet>
                <title>Kids Store Home Page</title>
            </Helmet>
            <HeaderSec />
            <Gallery />
            <ShopCategory />
            <NewArrival />
            <ExclusiveSec />
        </div>
    );
};

export default Home;