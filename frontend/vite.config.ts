import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/costratio/', // GitHub Pagesのリポジトリ名を指定h
});