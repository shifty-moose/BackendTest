import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool(
    // We do not this part
    // if we have follow the naming convension
    // from the pg documentation.
    // pg will find the values from .env automatically. 
    {
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDB,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
    }
);

export default pool;