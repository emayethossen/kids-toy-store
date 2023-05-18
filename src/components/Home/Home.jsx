import ExclusiveSec from "../ExclusiveSec/ExclusiveSec";
import Gallery from "../Gallery/Gallery";
import HeaderSec from "../HeaderSec/HeaderSec";
import NewArrival from "../NewArrivals/NewArrival";
import ShopCategory from "../ShopCategory/ShopCategory";

const Home = () => {
    return (
        <div className="bg-[#ffe5ea] pb-20">
            <HeaderSec />
            <Gallery />
            <ShopCategory />
            <NewArrival />
            <ExclusiveSec />
        </div>
    );
};

export default Home;