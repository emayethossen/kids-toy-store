import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useState,useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddToys = () => {

    const [category, setCategory] = useState('');
const {user}=useContext(AuthContext)
    const handleAddToys = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const rating = form.rating.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const price = form.price.value;

        const newToy = {
            name,
            sellerName,
            email,
            quantity,
            photo,
            rating,
            details,
            price,
            category
        }
        console.log(newToy);
        // send data to the server
        fetch('https://baby-toys-server-five.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Succesfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div className="lg:px-36">
            <h2 className="lg:text-5xl text-3xl text-center font-bold uppercase">Add a Toy </h2>
            <Helmet>
                <title>Kid Store Add Toys</title>
            </Helmet>
            <form onSubmit={handleAddToys} className="space-y-4 bg-[#F3F3F3] lg:p-24 rounded py-4 p-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <input type="text" name="name" placeholder="Name" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="sellerName" placeholder="Enter seller Name" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" defaultValue={user.email} placeholder="Enter seller email" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="quantity" placeholder="Enter available quantity" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="photo" placeholder="Enter photo url" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="rating" placeholder="Enter toys rating" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="price" placeholder="Enter toys price" className="input" required />
                    </div>
                    <div>
                        <select className="w-full input" id="categories" value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                            <option value="Wooden Toys">Wooden Toys</option>
                            <option value="Stuffed Toys">Stuffed Toys</option>
                            <option value="Construction Toys">Construction Toys</option>
                            <option value="Transformer Toys">Transformer Toys</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                    <input type="text" name="details" placeholder="Enter toys details" className="input" required />
                </div>
                <div className="form-control mt-6">
                    <input className="btn text-white border-none bg-[#FF3811]" type="submit" value="Add Toy" />
                </div>

            </form>
            <div className="card-body">


            </div>
        </div>
    );
};

export default AddToys;