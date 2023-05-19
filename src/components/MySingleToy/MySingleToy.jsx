import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySingleToy = ({ toy, toys, setToys }) => {
    const { _id, photo, name } = toy;
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
            <div className="bg-base-200 hero-content flex-col lg:flex-row border rounded-xl">
                <img src={photo} className="rounded-lg lg:w-96 w-full h-64 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
                <div>
                    <Link to={`update-toy/${_id}`}>
                        <button className="btn btn-primary"><FaEdit /></button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">X</button>
                </div>
            </div>
        </div>
    );
};

export default MySingleToy;