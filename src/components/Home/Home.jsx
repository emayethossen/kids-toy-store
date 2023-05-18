import ExclusiveSec from "../ExclusiveSec/ExclusiveSec";
import Gallery from "../Gallery/Gallery";
import HeaderSec from "../HeaderSec/HeaderSec";
import NewArrival from "../NewArrivals/NewArrival";

const Home = () => {
    return (
        <div className="bg-[#ffd1dc]">
            <HeaderSec />
            <Gallery />
            <NewArrival />
            <ExclusiveSec />
        </div>
    );
};

export default Home;