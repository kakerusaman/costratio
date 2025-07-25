import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // 出力先をbuildに変更
  },
  base: '/costratio/', // GitHub Pagesのリポジトリ名を指定h
});