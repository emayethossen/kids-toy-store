
const SingleToy = ({ ty }) => {

    const { _id, sellerName, price, quantity, category, photo, name } = ty;

    return (
        <tr>
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
                <button className="btn bg-[#6495ED] border-none hover:bg-[#ff69b4] uppercase">details</button>
            </th>
        </tr>
    );
};

export default SingleToy;