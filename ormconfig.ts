import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "nestjs_graphql_two",
    synchronize: true,
    logging: true,
    entities: ['dist/src/**/*.entity{.ts,.js}'],
    migrations: [
        'dist/src/migrations/*.js'
    ],
    cli: {
        migrationsDir: 'src/migrations'
    }
}

export default config;