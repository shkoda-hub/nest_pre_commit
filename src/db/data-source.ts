import { DataSource } from 'typeorm';
import { configDotenv } from 'dotenv';
import { User } from '../users/entities/user.entity';

configDotenv({ quiet: true });

export default new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [User],
  migrations: ['dist/db/migrations/*.js'],
  synchronize: false,
  connectTimeoutMS: 10_000,
  migrationsRun: false,
});
