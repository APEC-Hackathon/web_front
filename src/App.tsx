import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes"
import AuthLayout from "./components/layout/AuthLayout";
import Login from "./pages/userAuth/Login";
import Signup from "./pages/userAuth/Signup";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
                <Route path="/" element={<MainLayout />}>
                    {routes}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
