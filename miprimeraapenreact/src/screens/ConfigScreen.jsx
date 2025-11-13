import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ConfigScreen = ()=>{
    const navigate = useNavigate();
    return (
        <Stack>
            <Button onClick={()=>{
                localStorage.removeItem("accessToken");
                navigate("/");
            }}>Cerrar sesión</Button>
        </Stack>
    );
}
export default ConfigScreen;