const getAllStudents = async ()=>{

    let token = localStorage.getItem("accessToken");
    console.log(token);
    let response = await fetch("http://192.168.131.195:8080/api/v1/professors", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    let data = await response.json();
    return data;
}

export default getAllStudents;