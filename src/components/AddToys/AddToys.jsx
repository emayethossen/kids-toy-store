import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const AddToys = () => {

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
        }
        console.log(newToy);
        // send data to the server
        fetch('http://localhost:5000/toys', {
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
                        <input type="email" name="email" placeholder="Enter seller email" className="input" required />
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