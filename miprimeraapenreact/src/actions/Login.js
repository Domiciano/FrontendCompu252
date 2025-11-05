const login = async ({username, password})=>{

    let obj = {username: username, password:password};
    
    //OBJ -> STRING
    let json = JSON.stringify(obj);

    let response = await fetch("http://192.168.131.195:8080/api/v1/auth/login", {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: json
    });
    console.log(response);
    let data = await response.json();
    console.log(data.accessToken);

    localStorage.setItem("accessToken", data.accessToken);
    
}

export default login;
