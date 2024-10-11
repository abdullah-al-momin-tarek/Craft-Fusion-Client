import axios from "axios"

export const axiosinstanse = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxios = ()=>{
    return axiosinstanse
}

export default useAxios