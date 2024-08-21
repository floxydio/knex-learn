import knex from 'knex'

const knexCfg = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'dummy_folder'
    }
})


export default knexCfg