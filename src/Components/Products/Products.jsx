import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import ProductsCard from "./ProductsCard";

const Products = () => {
    const axiosPublic = useAxios()
    const [products, setProducts] = useState()

    axiosPublic.get("/products")
    .then(data=>{
        setProducts(data.data) 
    })
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