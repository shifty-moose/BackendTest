import { Router } from "express";
import { getAllRecipes, getRecipeById, createRecipe } from "./recipeController.js";

const recipeRouter = Router();

recipeRouter.get("/", getAllRecipes);
recipeRouter.get("/recipes/:id", getRecipeById);
recipeRouter.post("/recipes/", createRecipe);


export default recipeRouter;

