import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useCart from "../../../Context/useCart";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
    const { users } = useContext(AuthContext);
    const { carts, refetch } = useCart();   
    const axiosPublic = useAxios();

    if (!users) {
        return;
    }

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`cart/${id}`).then((res) => {
                    if (res.data.message === "Deleted") {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 500,
                        });
                        refetch();
                    }
                });
            }
        });
    };

    const handleBuy = (id, product_id, quantity, seller_email) => {
        Swal.fire({
            title: "Are you sure to buy this?",
            text: "You won't be able to return this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Buy it!",
        }).then((result) => {
            if (result.isConfirmed) {

                const data = { buyer_email: users.email, product_id: product_id, quantity: quantity, seller_email: seller_email };



                axiosPublic.post(`/buy`, data).then((res) => {
                    console.log(res.data);
                    
                    if (res.data.message === "Product bought successfully") {
                        Swal.fire({
                            title: "Successful!",
                            text: "Your product has been bought.",
                            icon: "success",
                        });
                        refetch();
                    }
                });
            }
        });
    };

    const handleQuantityChange = (id, currentQuantity, operation) => {
        let newQuantity = operation === "increase" ? currentQuantity + 1 : currentQuantity - 1;

       
        if (newQuantity < 1) {
            newQuantity = 1;
        }
        
        axiosPublic
            .patch(`/cart/${id}`, { quantity: newQuantity })
            .then((res) => {
                if (res.data.message === "Updated") {
                    refetch();
                }
                else if(res.data.message === "Quantity not available"){
                    toast.error("Quantity not available")}
            })
            .catch((err) => {
                console.log(err);
                
                if(err.messaage=="Quantity not available"){
                   console.log(err);
                   
                }
                console.error("Failed to update quantity:", err);
            });
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-9">All of your Products</h2>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts?.map((cart, index) => (
                            <tr key={cart.id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={cart.product_image} alt="Product Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{cart.product_name}</div>
                                            <div className="text-xs opacity-50">{formatDateTime(cart.added_at)}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{cart.product_category}</td>
                                <td>{cart.product_price}</td>
                                <td>
                                    <div className="flex items-center gap-2">
                                        {/* Decrease button */}
                                        <button
                                            onClick={() => handleQuantityChange(cart.id, cart.quantity, "decrease")}
                                            className="px-2 py-1 bg-red-500 text-white rounded"
                                        >
                                            -
                                        </button>
                                        <span>{cart.quantity}</span>
                                        {/* Increase button */}
                                        <button
                                            onClick={() => handleQuantityChange(cart.id, cart.quantity, "increase")}
                                            className="px-2 py-1 bg-green-500 text-white rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex gap-8 text-xl">
                                        
                                        <button onClick={() => handleDelete(cart.id)} className="text-red-600 text-2xl">
                                            <MdDelete />
                                        </button>
                                        <button onClick={() => handleBuy(cart.id, cart.product_id, cart.quantity, cart.seller_email)} className="text-red-600 text-xs bg-yellow-400 p-1 px-2 rounded-xl">
                                            Buy Now
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
        </div>
    );
};

export default Cart;
