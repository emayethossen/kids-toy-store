import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const toy = useLoaderData();
    const { _id, name, sellerName, email, quantity, photo, rating, details, price, } = toy
    const handleUpdateToys = (e) => {
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

        const updatedToy = {
            name,
            sellerName,
            email,
            quantity,
            photo,
            rating,
            details,
            price,
        }
        console.log(updatedToy);
        // send data to the server
        fetch(`https://baby-toys-server-five.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Succesfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div className="lg:px-36">
            <h2 className="lg:text-5xl text-3xl text-center font-bold uppercase">Update Toy: {name} </h2>
            <form onSubmit={handleUpdateToys} className="space-y-4 bg-[#F3F3F3] lg:p-24 rounded py-4 p-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="sellerName" defaultValue={sellerName} placeholder="Enter seller Name" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" defaultValue={email} placeholder="Enter seller email" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Enter available quantity" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo url" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="rating" defaultValue={rating} placeholder="Enter toys rating" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="price" defaultValue={price} placeholder="Enter toys price" className="input" required />
                    </div>
                </div>
                <div className="form-control">
                    <input type="text" name="details" defaultValue={details} placeholder="Enter toys details" className="input" required />
                </div>

                <div className="form-control mt-6">
                    <input className="btn text-white border-none bg-[#FF3811]" type="submit" value="Updated Toy" />
                </div>

            </form>
            <div className="card-body">


            </div>
        </div>
    );
};

export default UpdateToy;