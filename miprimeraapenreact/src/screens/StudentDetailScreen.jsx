import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudentComponent from "../component/StudentComponent";
import CourseComponent from "../component/CourseComponent";
import getCoursesByStudentId from "../actions/GetCoursesByStudentId";
import getStudentById from "../actions/GetStudentById";


const  StudentDetailScreen = ()=>{
    
    const { studentId } = useParams(); 
    const [student, setStudent] = useState(null);
    const [courses, setCourses] = useState([]);

    //Esto nos lo podemos ahorrar. Pilas!
    const getStudent = async (studentId)=>{
        let student = await getStudentById({studentId:studentId});
        setStudent(student);
    }

    const getStudentCourses = async (studentId)=>{
        let courses = await getCoursesByStudentId({studentId:studentId});
        setCourses(courses);
    }

    useEffect(()=>{
        console.log(studentId);
        getStudent(studentId);
        getStudentCourses(studentId);
    } , []);
    

    return(
        <Stack>
            {student !== null && <StudentComponent student={student}/>}
            <Stack>
                {courses.length !== 0 && courses.map((course)=><CourseComponent key={course.name} course={course}/>)}
            </Stack>
        </Stack>
    );

}
export default StudentDetailScreen;