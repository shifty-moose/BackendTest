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

    WITH ingredients AS (
        SELECT 
         recipeid, 
         ARRAY_AGG(ingredients) AS ingredients_arr
        FROM ingredients
        GROUP BY recipeid
      ),
      
        methods AS (
            SELECT
            recipeid,
            ARRAY_AGG(todo) AS methods_arr
            FROM methods
            GROUP BY recipeid
        )

        SELECT
        recipes.id,
        recipes.title,
        recipes.pictureurl,
        recipes.subheading,
        recipes.description,
        recipes.type,
        recipes.preptimeinminutes,
        ingredients.ingredients_arr,
        methods.methods_arr
        FROM recipes AS recipes
        LEFT JOIN ingredients AS ingredients
            ON recipes.id = ingredients.recipeid
        LEFT JOIN methods AS methods
            ON recipes.id = methods.recipeid
        WHERE recipes.id = $1
        ORDER BY recipes.id;
    `;

    pool.query(query, [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

export const createRecipe = (req, res) => {
    const { title, pictureurl, subheading, description, type, preptimeinminutes } = req.body;

    pool.query('INSERT INTO recipes (title, pictureurl, subheading, description, type, preptimeinminutes) VALUES ($1, $2, $3, $4, $5, $6)', [title, pictureurl, subheading, description, type, preptimeinminutes], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`Recipe added with ID: ${results.insertId}`);
    });
};