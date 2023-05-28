import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions : DataSourceOptions = {
    type: 'mysql',
    host: process.env.MYSQLDB_HOST || 'mysql-db',
    port: parseInt(process.env.MYSQLDB_DOCKER_PORT) || 3306,
    database: process.env.MYSQLDB_DATABASE || 'minishop_pos',
    username: process.env.MYSQLDB_USER || 'root',
    password: process.env.MYSQLDB_PASSWORD || 'root',
    entities: [
        "dist/**/*.entity{.ts,.js}"
    ],
    synchronize: false,
    migrationsTableName: 'migrations', // this field will be used to create the table by name of migrations. You can name it whatever you want. But make sure to use the sensible name
    migrations: [
        "dist/database/migrations/*{.ts,.js}" // This is the path to the migration files created by typeorm cli. You don't have to create dist folder. When you save file, compiled files will be stored in dist folder
    ],
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;