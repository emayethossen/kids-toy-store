import Header from "../components/Header/Header";
import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;