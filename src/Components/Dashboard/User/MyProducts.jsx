import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { FaPlus, FaUserPlus } from "react-icons/fa";
import useProductsEmail from "../../../Context/useProductsEmail";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";



const MyProducts = () => {
    const { users } = useContext(AuthContext);
    const axiosPublic = useAxios();
    const {  products, refetch, isLoading } = useProductsEmail();
    
    if (!users) {
        return;
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        const product = {
            name: data.name,
            category: data.category,
            price: data.price,
            quantity: data.quantity,
            image: data.image,
            description: data.description,
            email: users.email,
        }
      
        axiosPublic.post(`add-product`, product)
        .then(res=>{
            console.log(res.data);
            if(res.data.message === 'Product Added'){
                toast.success('Product Added Successfully');
                document.getElementById('add-product').close()
            }
            
        })
    };
    
   

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
            <h2 className="text-3xl font-bold text-center my-9">All of your Products</h2>
            <div className="flex justify-end mb-5">
            <button onClick={()=>document.getElementById('add-product').showModal()} className="flex items-center bg-green-500 px-2 p-2 rounded-xl text-white justify-end"><FaPlus /> Add Product</button>

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
                                        <button className="text-yellow-600"><FiEdit /></button>
                                        <button onClick={()=>handleDelete(product.id)} className="text-red-600 text-2xl"><MdDelete /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


{/* Add Product Modal */}
<dialog id="add-product" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-bold text-2xl">Add Product</h2>

      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          placeholder="Enter product name"
          className="input input-bordered input-primary w-full max-w-md"
          {...register("name", { required: true, maxLength: 30 })}
        />
        {errors.name && errors.name.type === "required" && (
          <span className="text-red-500">This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span className="text-red-500">Max length exceeded</span>
        )}
      </div>

      <div className="flex gap-5">
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select 
            id="category" 
            className="select select-secondary w-full max-w-md" 
            {...register("category", { required: true })}>
            <option disabled value="">
              Select product category
            </option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
            <option value="Decor">Decor</option>
            <option value="Accessories">Accessories</option>
            <option value="Home Textiles">Home Textiles</option>
            <option value="Toys">Toys</option>
            <option value="Kitchenware">Kitchenware</option>
            <option value="Home Accessories">Home Accessories</option>
          </select>
          {errors.category && <span className="text-red-500">Category is required</span>}
        </div>

        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            placeholder="Enter product price"
            className="input input-bordered input-primary w-full max-w-md"
            {...register("price", { required: true, validate: value => !isNaN(value) && value > 0 })}
          />
          {errors.price && errors.price.type === "required" && (
            <span className="text-red-500">Price is required</span>
          )}
          {errors.price && errors.price.type === "validate" && (
            <span className="text-red-500">Price must be a positive number</span>
          )}
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="text"
          placeholder="Enter product quantity"
          className="input input-bordered input-primary w-full max-w-md"
          {...register("quantity", { required: true, validate: value => Number.isInteger(+value) && value > 0 })}
        />
        {errors.quantity && errors.quantity.type === "required" && (
          <span className="text-red-500">Quantity is required</span>
        )}
        {errors.quantity && errors.quantity.type === "validate" && (
          <span className="text-red-500">Quantity must be a positive integer</span>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="text"
          placeholder="Enter image URL"
          className="input input-bordered input-primary w-full max-w-md"
          {...register("image", { required: true, pattern: /^https?:\/\// })}
        />
        {errors.image && errors.image.type === "required" && (
          <span className="text-red-500">Image URL is required</span>
        )}
        {errors.image && errors.image.type === "pattern" && (
          <span className="text-red-500">Must be a valid URL</span>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="textarea textarea-secondary w-full max-w-md"
          placeholder="Enter product description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span className="text-red-500">Description is required</span>}
      </div>

      <div className="form-control">
        <button className="btn btn-primary w-full max-w-md mt-5">Add Product</button>
      </div>
    </form>

  </div>
</dialog>
<Toaster
  position="bottom-right"
  reverseOrder={false}
/>
        </div>
    );
};

export default MyProducts;
