import { Router } from "express";
import { getAllRecipes, getRecipeById } from "./recipeController.js";

const recipeRouter = Router();

recipeRouter.get("/", getAllRecipes);
recipeRouter.get("/recipes/:id", getRecipeById);

export default recipeRouter;
