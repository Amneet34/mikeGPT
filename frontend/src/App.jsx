import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import DashboardPage from './DashboardPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    }
])

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
