const login = async ({username, password})=>{
    
    let obj = {username: username, password:password};
    
    //OBJ -> STRING
    let json = JSON.stringify(obj);

    let response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: json
    });
    if(response.status === 200){
        console.log(response);
        let data = await response.json();
        console.log(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
    }else{
        throw new Error("Error de autenticación");
    }
    
}

export default login;
