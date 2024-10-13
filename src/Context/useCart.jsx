import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import useAxios from "../Hooks/useAxios";

const useCart = () => {
    const {users} = useContext(AuthContext)
    const axiosPublic = useAxios()
    const {data: carts, isLoading, isError, refetch} = useQuery({
        queryKey: ['cart'],
        queryFn: async ()=>{
          const res = await axiosPublic.get(`/cart/${users?.email}`)
          return res.data
        },
        enabled: !!users?.email
      })
    return {carts, isLoading, refetch}
};

export default useCart;