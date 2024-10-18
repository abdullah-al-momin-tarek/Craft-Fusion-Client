import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";


const PurchaseHistory = () => {
    const { users } = useContext(AuthContext);
    const axiosPublic = useAxios();
    
    if (!users) {
        return;
    }
    
    const { data: products, isLoading } = useQuery({
        queryKey: ["buy"],
        queryFn: async () => {
            const data = await axiosPublic.get(`/purchase-history/${users?.email}`);
            return data.data;
        }
    });

    if (isLoading) {
        return <h1>Loading...</h1>
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
                            <th>Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, index) => (
                            <tr key={product.id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={product.product_image} alt="Product Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.product_name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{product.product_category}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{formatDateTime(product.date)}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PurchaseHistory;
