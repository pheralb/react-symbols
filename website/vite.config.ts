import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// Plugins =>
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [preact(), tsconfigPaths()]
});
