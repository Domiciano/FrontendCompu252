const getAllStudents = async ()=>{

    let token = localStorage.getItem("accessToken");
    console.log(token);
    let response = await fetch("http://localhost:8080/api/v1/students", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    let data = await response.json();
    return data;
}

export default getAllStudents;