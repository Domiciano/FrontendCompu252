import { baseurl} from "../utils/constant";

const getStudentById = async ({studentId})=>{
    let token = localStorage.getItem("accessToken");
    let response = await fetch(`${baseurl}/api/v1/students/${studentId}`, {
        method:"GET",
        headers:{
            "Authorization":`Bearer ${token}`
        }
    });
    let data = await response.json();
    return data;
}

export default getStudentById;
