import axios from "axios";

const instances=axios.create({
    baseURL:'https://api.escuelajs.co/api/v1'
    // baseURL:"https://dummyjson.com"
})

export default instances