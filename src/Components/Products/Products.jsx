import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import ProductsCard from "./ProductsCard";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
    const axiosPublic = useAxios()

    const {data: products, isLoading} = useQuery({
        queryKey: ['cart'],
        queryFn: async ()=>{
          const res = await axiosPublic.get(`/products`)
          return res.data
        },
      })
      
      if(isLoading){
        return "loading........"
      }

   
    return (
        <div className="mt-12">
            <div>
                <h2 className="text-3xl font-bold text-center mb-6">Exciting Products</h2>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 p-5">
            {
                products?.slice(0,8).map(product=><ProductsCard key={product.id} product={product} />)
            }
        </div>
        </div>
    );
};

export default Products;