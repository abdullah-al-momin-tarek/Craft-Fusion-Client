import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";



const useAdmin = () => {
    const { users } = useContext(AuthContext);
    const useAxiosData = useAxios()
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [users?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await useAxiosData.get(`/user/${users.email}`);
            console.log(res.data.role   );
            return res.data?.role;
        }
    })
    
    return [isAdmin, isAdminLoading]
};

export default useAdmin;