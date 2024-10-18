import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { users } = useContext(AuthContext);
    const axiosPublic = useAxios();
    
    if (!users) {
        return;
    }
    
    const { data: allUsers, refetch, isLoading } = useQuery({
        queryKey: ["AllUsers"],
        queryFn: async () => {
            const data = await axiosPublic.get(`/users`);
            return data.data;
        }
    });

    

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

    if (isLoading) {
        return "loading........";
        
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-9">All of your Products</h2>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers?.map((user, index) => (
                            <tr key={user.id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={user.photoURL} alt="Product Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <div className="flex gap-3 text-xl"> 
                                        <button onClick={()=>handleDelete(user.id)} className="text-red-600 text-2xl"><MdDelete /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
