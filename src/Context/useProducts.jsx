import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";


const useProducts = () => {
    const axiosPublic = useAxios()
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products`)
            return res.data
        },
    })
    return (
        { products, isLoading, refetch }
    );
};

export default useProducts;