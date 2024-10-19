import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { useContext } from "react";

const useProductsEmail = () => {
    const axiosPublic = useAxios();
    const { users } = useContext(AuthContext);
    const { data: products, refetch, isLoading } = useQuery({
        queryKey: ["myProducts"],
        queryFn: async () => {
            const data = await axiosPublic.get(`/products/${users?.email}`);
            return data.data;
        }
    });
    return (
        { products, refetch, isLoading }
    );
};

export default useProductsEmail;