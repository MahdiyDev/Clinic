const { Pool } = require('pg');

const pool = new Pool({
    connectionString: "postgres://birlyqqd:goOvNxsaIPf06d6-R7qCwbqmdt7KuMAS@ella.db.elephantsql.com/birlyqqd",
    // host: 'localhost',
    // port: 5432,
    // user: 'postgres',
    // password: '1407',
    // database: 'clinic'
})

const pg = async (SQL, ...values) => {
    const client = await pool.connect();
    
    try {
        const data = await client.query(SQL, values)
        return data.rows
    } catch (e) {
        console.log(e);
    } finally {
        client.release()
    }
}

module.exports = pg;