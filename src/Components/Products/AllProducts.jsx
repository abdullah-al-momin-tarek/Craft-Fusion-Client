import useProducts from "../../Context/useProducts";
import ProductsCard from "./ProductsCard";

const AllProducts = () => {
    const {products, isLoading} = useProducts();

   


    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'><span className="loading loading-spinner loading-lg"></span></div>
    }

    console.log(products);



    return (
        <div className="mt-12">
            <div>
                <h2 className="text-3xl font-bold text-center mb-6">EXCITING PRODUCTS</h2>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 p-5">
                {
                    products?.map(product => <ProductsCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default AllProducts;