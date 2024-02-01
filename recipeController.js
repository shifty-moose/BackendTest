import pool from './pool.js';

export const getAllRecipes = (req, res) => {
    pool.query('SELECT * FROM recipes', (error, results) => {
        if (error) {
            throw error;
        }
        console.log(results.rows);
        res.status(200).json(results.rows);
    });
};

export const getRecipeById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM recipes WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        console.log(results.rows);
        res.status(200).json(results.rows);
    });
};