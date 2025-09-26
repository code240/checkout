import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AppLayout from "./Layouts/AppLayout/AppLayout";
import { AppProvider } from "./Contexts/AppProvider";
import LoadingLayout from "./Layouts/LoadingLayout/LoadingLayout";

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <Routes>
                    <Route path="/" element={<AppLayout />} >
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="/load-checkout" element={<LoadingLayout />}></Route>
                </Routes>
            </AppProvider>
        </BrowserRouter>
    );
}

export default App;
