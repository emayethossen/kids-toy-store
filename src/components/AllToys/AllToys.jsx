import { Helmet } from "react-helmet";

const AllToys = () => {

    // fetch('http://localhost:5000/toys')
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log(data);
    // })

    return (
        <div>
            <Helmet>
                <title>Kids Store All Toys</title>
            </Helmet>
        </div>
    );
};

export default AllToys;