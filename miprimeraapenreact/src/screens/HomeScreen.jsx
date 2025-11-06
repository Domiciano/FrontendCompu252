import { Outlet, Link } from "react-router-dom";
import { Box, Stack, Typography, Button } from "@mui/material";

const HomeScreen = () => {
  return (
    <Stack direction="row" sx={{ height: "100vh" }}>
        <Stack sx={{ width: 300, bgcolor: "#f4f4f4", p: 2 }}>
            <Button>Inicio</Button>
            <Button>Estudiantes</Button>
            <Button>Configuración</Button>
        </Stack>
        <Box sx={{ flexGrow: 1, bgcolor: "red", p: 0}}>
            <Outlet />
        </Box>
    </Stack>
  );
}
export default HomeScreen;