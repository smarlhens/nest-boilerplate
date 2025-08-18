import { defineConfig } from 'taze';

export default defineConfig({
  exclude: [],
  force: true,
  includeLocked: true,
  install: true,
  nodecompat: true,
  packageMode: {
    '@types/node': 'minor',
    typescript: 'ignore', // todo: bump with eslint
    eslint: 'minor', // TODO: migrate config
    '@nestjs/*': 'minor', // breaking changes
    '@typescript-eslint/*': 'minor', // TODO: migrate alongside eslint
  },
});
