import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes"
import AuthLayout from "./components/layout/AuthLayout";
import Login from "./pages/userAuth/Login";
import Signup from "./pages/userAuth/Signup";
import ProblemDetailsPage from "./pages/marketplace/ProblemDetailsPage";
import CollaborationDetailsPage from "./pages/marketplace/CollaborationDetailsPage";
import HomePage from "./pages/home/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<HomePage />} />
                </Route>
                <Route path="/" element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
                <Route path="/" element={<MainLayout />}>
                    <Route
                        path="/problem/:id"
                        element={<ProblemDetailsPage />}
                    />
                    <Route
                        path="/collaboration/:id"
                        element={<CollaborationDetailsPage />}
                    />
                    {routes}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
