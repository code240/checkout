import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AppLayout from "./Layouts/AppLayout/AppLayout";
import { AppProvider } from "./Contexts/AppProvider";
import LoadingLayout from "./Layouts/LoadingLayout/LoadingLayout";
import VerificationPage from "./Pages/VerificationPage/VerificationPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <Routes>
                    <Route path="/" element={<LoadingLayout />} ></Route>
                    <Route path="/:shopId/:orderId" element={<AppLayout />} >
                        <Route path="checkout" element={<Home />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="verification" element={<VerificationPage />} />
                        <Route path="error" element={<ErrorPage />}></Route>
                    </Route>
                </Routes>
            </AppProvider>
        </BrowserRouter>
    );
}

export default App;
