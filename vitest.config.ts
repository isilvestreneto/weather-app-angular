import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular({
    jit: true,
    tsconfig: './tsconfig.spec.json',
    transformFilter: (_code, id) => !id.includes('test-setup'),
  })],
  resolve: {
    dedupe: ['@angular/core', '@angular/core/testing', '@angular/platform-browser'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['src/**/*.spec.ts'],
  },
});

