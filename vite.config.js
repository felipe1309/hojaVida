import { resolve } from 'path'
import { defineConfig } from 'vite'
console.log(resolve(__dirname, 'src', 'views', 'form/index.html'))
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        form: resolve(__dirname, 'form/index.html')
      }
    }
  }
})
