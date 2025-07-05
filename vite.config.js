import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true,
      filename: 'bundle-report.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Group large dependencies
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor_react';
            }
            if (id.includes('d3') || id.includes('three')) {
              return 'vendor_viz';
            }
            if (id.includes('firebase')) {
              return 'vendor_firebase';
            }
            return 'vendor'; // Other dependencies
          }
          
          // Group src files by route
          if (id.includes('src/pages')) {
            const page = id.split('/pages/')[1].split('/')[0];
            return `page_${page}`;
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Temporary increase
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@headlessui/react'
    ],
  },
});
