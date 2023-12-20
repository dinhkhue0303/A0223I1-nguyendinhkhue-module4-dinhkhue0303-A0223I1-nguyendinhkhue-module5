import axios from "axios";

export const createStudent = async (values) => {
    try {
        await axios.post("http://localhost:8080/list",values)
    }catch (e){
        console.log(e)
    }
}