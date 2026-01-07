import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin';
import viteCompression from 'vite-plugin-compression';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({
      verbose: true,       // показывать сгенерированные файлы в консоли
      disable: false,      // включение/отключение плагина
      threshold: 10240,    // минимальный размер файла в байтах для сжатия (10KB)
      algorithm: 'gzip',   // 'gzip' или 'brotliCompress'
      ext: '.gz',          // расширение сжатого файла
    }),
    // Для brotli можно добавить второй вызов:
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 70 },
      pngquant: { quality: [0.6, 0.8] },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },
    }),
  ],build: {
    minify: 'esbuild', // по умолчанию 'esbuild'
    esbuild: {
      drop: ['console', 'debugger'], // удаляем console.log и debugger
    },
  },
})
