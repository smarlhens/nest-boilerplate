import { resolve } from 'path';

const SOURCE_PATH = resolve(__dirname, '..', '.');

export default (): Record<string, unknown> => ({
  port: parseInt(process.env.PORT, 10),
  database: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
  orm: {
    entities: [`${SOURCE_PATH}/**/*.entity.ts`],
    synchronize: false,
  },
});
