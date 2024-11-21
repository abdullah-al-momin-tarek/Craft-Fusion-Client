import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";

const AllOrderHistory = () => {
    const axiosPublic = useAxios()
    const {data: orders, isLoading} = useQuery({
        queryKey: ['orders'],
        queryFn: async ()=>{
          const res = await axiosPublic.get(`/order-history`)
          return res.data 
        }
    })

    if(isLoading){
        return <div className='flex justify-center items-center h-screen'><span className="loading loading-spinner loading-lg"></span></div>
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
            <h2 className="text-3xl font-bold text-center my-9">ALL ORDER HISTORY</h2>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Buyer</th>
                            <th>Seller</th>
                            <th>Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((product, index) => (
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
                                <td>{product.buyer_email}</td>
                                <td>{product.seller_email}</td>
                                <td>{formatDateTime(product.date)}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrderHistory;