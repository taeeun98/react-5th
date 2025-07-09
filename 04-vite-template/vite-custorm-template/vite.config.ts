import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig ({
    base:'/',
    server:{
        host:'localhost',
        port:3000
    },
    plugins:[
        pluginReact({
            jsxRuntime:'automatic'
        })
    ],

    resolve:{
        alias:{
            '@':fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})