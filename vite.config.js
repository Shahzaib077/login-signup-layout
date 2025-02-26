import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all IPs
    port: 5173,      // Optional: Change the port
  },
});