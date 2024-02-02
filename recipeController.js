import pool from './pool.js';

export const getAllRecipes = (req, res) => {
    pool.query('SELECT * FROM recipes', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

export const getRecipeById = (req, res) => {

    const id = parseInt(req.params.id);

    const query = `
        SELECT
            recipes.*,
            ingredients.*,
            methods.*
        FROM
            recipes
        LEFT JOIN
            ingredients ON recipes.id = ingredients.recipeid
        LEFT JOIN
            methods ON recipes.id = methods.recipeid
        WHERE
            recipes.id = $1
    `;

    pool.query(query, [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};