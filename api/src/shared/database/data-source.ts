import { DataSource, DataSourceOptions } from "typeorm";
import dotenv from 'dotenv';
import { Banco } from "../../modules/banco/entity/banco";

dotenv.config()

// Esse código faz a conexão com o banco de dados usando o typeorm

const localOrmConfig: DataSourceOptions = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database:  process.env.MYSQL_DB,
    synchronize: false,
    logging: false,
    entities: [Banco],
    migrations: [`${__dirname}/**/**/migrations/*.{ts,js}`],
    subscribers: [],

}

export const appDataSource = new DataSource(localOrmConfig)

export function createConnection(): Promise<DataSource> {
    return appDataSource.initialize();
}