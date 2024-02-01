import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool(
    {
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDB,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
    }
);

export default pool;