import { Toaster } from "react-hot-toast";
import useProducts from "../../../Context/useProducts";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const AllAdminProducts = () => {
    const {products, isLoading,refetch} = useProducts();
    const axiosPublic = useAxios();


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

    const getTrimmedDescription = (description) => {
        if (description?.length > 20) {
            return description?.slice(0, 20) + "...";
        }
        return description;
    };

    const handleDelete = id =>{


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`product/${id}`)
                .then(res=>{
                    console.log(res.data);
                    
                    if(res.data.message == 'Deleted' ){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 500
                          });
                        refetch()
                    }
                })
            }
          });


        
    }

    return (
        <div>
            <div>
            <h2 className="text-3xl font-bold text-center my-9">ALL PRODUCTS</h2>
            <div className="flex justify-end mb-5">
          

            </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Action</th>
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
                                                <img src={product.image} alt="Product Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.name}</div>
                                            <div className="text-xs opacity-50">{formatDateTime(product.post_time)}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{getTrimmedDescription(product.description)}</td>
                                <td>
                                    <div className="flex gap-3 text-xl"> 
                                        <button onClick={()=>handleDelete(product.id)} className="text-red-600 text-2xl"><MdDelete /></button>
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

export default AllAdminProducts;