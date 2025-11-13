import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const StudentComponent = ({student, onClicked})=>{
    return(
        <Stack>
            <Typography variant="h5">{student.name}</Typography>
            <Typography>{student.code}</Typography>
            <Button onClick={onClicked}>Ver detalles</Button>
        </Stack>
    );
}
export default StudentComponent;
// <StudentComponent student={obj} onClicked={ ()=> navigate("/students/4") }/>