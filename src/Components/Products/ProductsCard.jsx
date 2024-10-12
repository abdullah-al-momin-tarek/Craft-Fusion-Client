import { FaCartPlus } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxios from "../../Hooks/useAxios";
import toast, { Toaster } from 'react-hot-toast';

const ProductsCard = ({ product }) => {
    const {users} = useContext(AuthContext)
    const axiosPublic = useAxios()

    const handlecart = () =>{
       const data = {
            product_id: product.id,
            user_email: users.email
        }
        axiosPublic.post("/add-cart", data)
        .then(data=>{
            toast.success(data?.data?.message)
            
        })

    }

    return (
        <div className="relative p-5 bg-gray-200 text-center flex-col items-center flex rounded-xl max-w-[400px] group">
            <img className="w-60 rounded-xl" src="https://i.ibb.co.com/ZN7WX3k/hat.jpg" alt="Hat cap" />
            <h4 className="text-2xl mt-3">{product?.name}</h4>
            <p>{product?.price} Taka</p>
            
            {/* Buttons are hidden initially and will be shown on hover */}
            <div className="absolute inset-0 flex gap-5 justify-center items-center bg-gray-900 bg-opacity-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Add to Cart button with hover effects */}
                <button onClick={handlecart} className="text-xl text-white flex items-center gap-2 p-2 bg-[#FF78AC] rounded-xl transform transition-transform duration-300 hover:scale-110 hover:bg-pink-700">
                    <FaCartPlus /> Add to Cart
                </button>
                
                {/* Buy Now button with hover effects */}
                <button className="text-xl text-white flex items-center gap-2 p-2 bg-yellow-600 rounded-xl transform transition-transform duration-300 hover:scale-110 hover:bg-yellow-500">
                    <BsCartCheckFill /> Buy Now
                </button>
            </div>
            <Toaster
  position="top-right"
  reverseOrder={true}
/>
        </div>
    );
};

export default ProductsCard;
