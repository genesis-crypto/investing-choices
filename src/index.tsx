import React from "react";
import App from "./View/App";
import CreatePrinciple from "./View/CreatePrinciple";
import EditPrinciple from "./View/EditPrinciple";
import ReactQueryProvider from "./config/cache";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

axios.defaults.baseURL = "http://localhost:8000";

root.render(
    <React.StrictMode>
        <ReactQueryProvider>
            <GeistProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/create" element={<CreatePrinciple />} />
                        <Route path="/edit/:id" element={<EditPrinciple />} />
                    </Routes>
                </BrowserRouter>
                <CssBaseline />
            </GeistProvider>
        </ReactQueryProvider>
    </React.StrictMode>
);
