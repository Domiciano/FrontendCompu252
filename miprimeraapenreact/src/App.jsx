import {RouterProvider, createBrowserRouter} from "react-router-dom"; 
import LoginForm from './screens/LoginForm';
import HomeScreen from './screens/HomeScreen';
import NotFound from './screens/NotFound';
import StudentListScreen from "./screens/StudentListScreen";


const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginForm />,
    },
    {
      path: "/home",
      element: <HomeScreen />,
      children: [
        {
          index: true,
          element: <StudentListScreen/>
        }
      ]
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]
);

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;