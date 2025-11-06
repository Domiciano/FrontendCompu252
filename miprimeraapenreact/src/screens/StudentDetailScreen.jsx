import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const  StudentDetailScreen = ()=>{
    
    const { studentId } = useParams(); 

    useEffect(()=>{
        console.log(studentId);
    } , []);
    

    return(
        <Stack>
            
        </Stack>
    );

}
export default StudentDetailScreen;