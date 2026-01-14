npm create vite@latest project-name
npm install

npm install tailwindcss @tailwindcss/vite

<!-- in vite.config.js -->
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

<!-- in index.css -->
@import "tailwindcss";

<!-- react router is a 3rd party unit  -->
https://reactrouter.com/home 
