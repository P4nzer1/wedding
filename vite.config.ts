import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
<<<<<<< HEAD
  
=======

>>>>>>> main
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
<<<<<<< HEAD
      '@': path.resolve(__dirname, './src'), 
      '@app': path.resolve(__dirname, './src/app'),
      '@widgets': path.resolve(__dirname, './src/widgets'), 
      '@shared': path.resolve(__dirname, './src/shared'), 
      '@pages': path.resolve(__dirname, './src/pages')
=======
      '@/*': path.resolve(__dirname, './src'), 
      '@widgets/*': path.resolve(__dirname, './src/widgets'), 
      '@shared/*': path.resolve(__dirname, './src/shared'), 
>>>>>>> main
    }
  }
})
