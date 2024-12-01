import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import fs from 'fs-extra';
import path from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  publicDir: 'public',
  plugins: [
    react(),
    dts({ 
      rollupTypes: true,
    }),
    libInjectCss(),
    {
      name: 'delete-types',
      closeBundle: async () => {
        const typesDir = path.resolve(__dirname, 'dist/types');
        if (fs.existsSync(typesDir)) {
          await fs.remove(typesDir);
        }
      }
    }
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: '@diominvd/ui-kit',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx}', {
          ignore: ['lib/**/*.d.ts', 'lib/**/*Interface.ts'],
        }).map((file: string) => [
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@components': path.resolve(__dirname, './lib/components'),
      '@t': path.resolve(__dirname, './lib/types')
    },
  },
});