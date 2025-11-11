import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import LoginForm from "./screens/LoginForm";
import StudentListScreen from "./screens/StudentListScreen";
import NotFound from "./screens/NotFound";
import StudentDetailScreen from "./screens/StudentDetailScreen";
import HomeScreen from "./screens/HomeScreen";

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