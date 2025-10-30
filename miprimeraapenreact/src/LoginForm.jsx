import { useState } from 'react' //use
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import './App.css';

//Prop
const LoginForm = ({title}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = ()=>{
        console.log(username);
        console.log(password);
    }

    return (
        <Stack>
            <Typography variant='h2'>{title}</Typography>
            <TextField label="Username" value={username} onChange={(event)=>setUsername(event.target.value)}/>
            <TextField label="Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            <Button onClick={handleLogin}>Iniciar Sesión</Button>
        </Stack>
    );
}

export default LoginForm;