import React from "react";
import App from "./View/App";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { QueryClientProvider, QueryClient } from "react-query";
import axios from "axios";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

axios.defaults.baseURL = "http://localhost:8000";

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <GeistProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                    </Routes>
                </BrowserRouter>
                <CssBaseline />
            </GeistProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
