import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { useState } from 'react' //use
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import './App.css';
import LoginForm from "./screens/LoginForm";
import StudentListScreen from "./screens/StudentListScreen";
import NotFound from "./screens/NotFound";
import StudentDetailScreen from "./screens/StudentDetailScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm/>
  },
  {
    path: "/students",
    element: <StudentListScreen/>
  },
  {
    path: "/students/:studentId",
    element: <StudentDetailScreen/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);


const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;