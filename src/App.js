import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AppLayout from "./Layouts/AppLayout/AppLayout";
import { AppProvider } from "./Contexts/AppProvider";

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <Routes>
                    <Route path="/" element={<AppLayout />} >
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </AppProvider>
        </BrowserRouter>
    );
}

export default App;
