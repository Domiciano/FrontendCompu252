import { useState } from 'react' //use
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import './App.css';
import login from './actions/Login';

//Prop
const LoginForm = ({title}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = ()=>{
        login({username:username, password: password});   
    }

    return (
        <Stack>
            <Typography variant='h2'>{title}</Typography>
            <TextField label="Username" value={username} onChange={(event)=>setUsername(event.target.value)}/>
            <TextField label="Password" value={password} type='password' onChange={(event)=>setPassword(event.target.value)}/>
            <Button onClick={handleLogin}>Iniciar Sesión</Button>
        </Stack>
    );
}

export default LoginForm;