import { FaCartPlus } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxios from "../../Hooks/useAxios";
import toast, { Toaster } from 'react-hot-toast';
import useCart from "../../Context/useCart";
import Swal from "sweetalert2";

const ProductsCard = ({ product }) => {
    const { users } = useContext(AuthContext)
    const axiosPublic = useAxios()
    const { refetch } = useCart()

    const handlecart = () => {
        const data = {
            product_id: product.id,
            user_email: users.email,
            seller_email: product.email
        }
        axiosPublic.post("/add-cart", data)
            .then(data => {
                toast.success(data?.data?.message)
                refetch()
            })
            .catch((err) => {
                toast.error(err.response.data.message);

            })

    }
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

    return (
        <div className="relative bg-slate-200 dark:bg-gray-900 rounded-xl mx-auto group">
            <div className=" flex flex-col justify-center mx-auto text-center p-4 ">
                <img className="w-[400px] h-[400px] object-cover rounded-xl" src={product?.image} alt="Hat cap" />
                <h4 className="text-2xl mt-3">{product?.name}</h4>
                <p>{product?.price} Taka</p>
            </div>

            <div className="absolute inset-0 flex gap-5 justify-center items-center bg-gray-900 bg-opacity-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                {
                    product?.quantity === 0 ? <p className="bg-red-600 text-white p-2 rounded-xl text-xl">Out of stock</p> : <div className="flex gap-5 justify-center items-center">
                        <button onClick={handlecart} className="text-xl text-white flex items-center gap-2 p-2 bg-[#555500] rounded-xl transform transition-transform duration-300 hover:scale-110 hover:bg-[#777700]">
                            <FaCartPlus /> Add to Cart
                        </button>

                        <button onClick={() => handleBuy(product.id, product.product_id, product.quantity, product.seller_email)} className="text-xl text-white flex items-center gap-2 p-2 bg-[#808000] rounded-xl transform transition-transform duration-300 hover:scale-110 hover:bg-[#555500]">
                            <BsCartCheckFill /> Buy Now
                        </button>
                    </div>
                }

            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={true}
            />
        </div>
    );
};

export default ProductsCard;
