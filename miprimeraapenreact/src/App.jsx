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
import ConfigScreen from "./screens/ConfigScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm/>
  },
  {
    path: "/home",
    element: <HomeScreen paths={[{path:"", text:"Estudiantes"}, {path:"config", text:"Configuración"}]}/>,
    children:[
      {
        index: true,
        element: <StudentListScreen/>
      },
      {
        path:"config",
        element: <ConfigScreen/>
      },
      {
        path: "students/:studentId",
        element: <StudentDetailScreen/>
      },
    ]
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