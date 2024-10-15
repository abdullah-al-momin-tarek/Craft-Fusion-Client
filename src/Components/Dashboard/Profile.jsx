import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useCart from "../../Context/useCart";

const Profile = () => {
    const {users} = useContext(AuthContext)
    const {carts} = useCart()
    return (
        <div className="flex items-center justify-center mt-12">
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md bg-green-300 rounded-xl sm:px-12 dark:bg-gray-700 dark:text-white">
	<img src={users?.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{users?.displayName}</h2>
			<p className="px-5 text-xs sm:text-base dark:text-white/60">{users?.email}</p>
		</div>
		<div className="flex justify-center pt-2 space-x-4 align-center">
			<span className="font-bold">Products: 3</span>
            <span className="font-bold">Cart: {carts?.length}</span>
		</div>
	</div>
</div>
        </div>
    );
};

export default Profile;