import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import DashboardPage from './DashboardPage';
import LogoutPage from "./LogoutPage";
import SurePage from "./SurePage";
import DonationPage from "./DonationPage";

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
    },
    {
      path: "/logout",
      element: <LogoutPage />,
    },
    {
      path: "/sure",
      element: <SurePage />,
    },
    {
      path: "/donation",
      element: <DonationPage />,
    }
])

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
