import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySingleToy = ({ toy, toys, setToys }) => {
    const { _id, details, rating, photo, name } = toy;
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(ty => ty._id !== _id);
                            setToys(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="rounded">
            <div className="bg-base-200 hero-content flex-col lg:flex-row justify-between border rounded-xl">
                <img src={photo} className="rounded-lg lg:w-72 w-full h-64 shadow-2xl" />
                <div className="lg:text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p>Details:{details}</p>
                    <p>Rating{rating}</p>

                </div>
                <div className="flex lg:flex-col justify-center gap-6">
                    <Link to={`update-toy/${_id}`}>
                        <button className="btn border-none bg-[#6495ED]"><FaEdit className="text-2xl" /></button>
                    </Link>

                    <button onClick={() => handleDelete(_id)} className="btn btn-error btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MySingleToy;