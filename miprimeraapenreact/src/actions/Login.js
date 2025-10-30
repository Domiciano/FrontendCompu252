const login = async ({username, password})=>{

    let obj = {username: username, password:password};
    
    //OBJ -> STRING
    let json = JSON.stringify(obj);

    let response = await fetch("http://192.168.131.189:8080/api/v1/auth/login", {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: json
    });

    console.log(response);
}

login({username: "profesor1@gmail.com", password:"123456"}); 

