import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/StudyTool/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'Study Tool Hello PWA',
        short_name: 'StudyTool',
        description: 'Hello world PWA test for iPhone install',
        theme_color: '#111827',
        background_color: '#111827',
        display: 'standalone',
        start_url: '/StudyTool/',
        scope: '/StudyTool/',
        icons: [
          {
            src: '/StudyTool/pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/StudyTool/pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
})