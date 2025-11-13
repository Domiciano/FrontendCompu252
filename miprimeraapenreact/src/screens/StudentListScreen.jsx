import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import getAllStudents from "../actions/GetAllStudents";
import StudentComponent from "../component/StudentComponent";
import { useNavigate } from "react-router-dom";


const StudentListScreen = ()=>{
    const navigate = useNavigate();
    const [list , setList] = useState([]);

    useEffect(()=>{
        const handleStudentList = async ()=>{
            let list = await getAllStudents();
            console.log(list);
            setList(list);
        };
        handleStudentList();
    }, []);

    return (
        <Stack direction="column">
            <Typography variant="h2">Lista de estudiantes</Typography>
            {list.length !== 0 
            && list.map( 
                (obj)=> (<StudentComponent key={obj.id} student={obj} onClicked={()=>{
                    navigate(`/home/students/${obj.id}`);
            }}/>) )}
        </Stack>
    );
}

export default StudentListScreen;