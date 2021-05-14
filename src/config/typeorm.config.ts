import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// "./src/modules/**/infra/typeorm/schemas/*.ts"

// import aushuash from '../'

const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "mongodb",
    useUnifiedTopology: true,
    entities: [
        'src/**/*.entity.ts"'
    ],
    useNewUrlParser: true,
    autoLoadEntities: true,
    synchronize: true,

}

module.exports = typeOrmConfig;

// import { createConnection } from 'typeorm';

// export const databaseProviders = [
//     {
//         provide: 'DATABASE_CONNECTION',
//         useFactory: async () => await createConnection({
//             name: "mongodb",
//             type: "mongodb",
//             host: "localhost",
//             port: 27017,
//             database: "mongodb",
//             useUnifiedTopology: true,
//             entities: [
//                 '../../src/*.ts'
//             ],
//         }),
//     },
// ];