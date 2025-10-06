import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AppLayout from "./Layouts/AppLayout/AppLayout";
import { AppProvider } from "./Contexts/AppProvider";
import LoadingLayout from "./Layouts/LoadingLayout/LoadingLayout";
import VerificationPage from "./Pages/VerificationPage/VerificationPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import AddressPage from "./Pages/AddressPage/AddressPage";
import NetbankingPage from "./Pages/NetbankingPage/NetbankingPage";
import CardPage from "./Pages/CardPage/CardPage";
import WalletPage from "./Pages/WalletPage/WalletPage";
import { BasicDataProvider } from "./Contexts/BasicDataProvider";
import 'rsuite/dist/rsuite-no-reset.min.css';
import './Style.scss';

function App() {
    return (
        <div className="MAIN_APP">
            <BrowserRouter>
                <AppProvider>
                    <BasicDataProvider>
                        <Routes>
                            <Route path="/" element={<LoadingLayout />} ></Route>
                            <Route path="/:shopId/:orderId" element={<AppLayout />} >
                                <Route path="checkout" element={<Home />} />
                                <Route path="login" element={<LoginPage />} />
                                <Route path="verification" element={<VerificationPage />} />
                                <Route path="checkout/address" element={<AddressPage />} />
                                <Route path="checkout/netbanking" element={<NetbankingPage />} />
                                <Route path="checkout/card" element={<CardPage />} />
                                <Route path="checkout/wallet" element={<WalletPage />} />
                                <Route path="error" element={<ErrorPage />}></Route>
                            </Route>
                        </Routes>
                    </BasicDataProvider>
                </AppProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
