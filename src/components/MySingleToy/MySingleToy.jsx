import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySingleToy = ({ toy, toys, setToys }) => {
    const { _id, photo, name, category, quantity, price, sellerName } = toy;
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

                fetch(`https://baby-toys-server-five.vercel.app/toys/${_id}`, {
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
        <tr className="border rounded-xl">
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} />
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{sellerName}</div>
                </div>
            </td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <th>
                <div className="flex lg:flex-col justify-center gap-6">
                    <Link to={`update-toy/${_id}`}>
                        <button className="btn border-none bg-[#6495ED] w-12"><FaEdit className="text-2xl" /></button>
                    </Link>

                    <button onClick={() => handleDelete(_id)} className="btn btn-error btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </th>
        </tr>
    );
};

export default MySingleToy;