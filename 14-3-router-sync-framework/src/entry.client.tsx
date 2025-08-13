import React from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import '@/styles/style.css'


hydrateRoot(
    document, 
    <React.StrictMode>
        <HydratedRouter />
    </React.StrictMode>
);