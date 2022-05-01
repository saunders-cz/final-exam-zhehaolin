import { meals } from "../data/meals.js";
import { Meal, Category } from "./models.js";
export const resolvers = {
  Query: {
    meals: async (parent, args) => {
      return await Meal.findAll({
        include: Category,
        order: [["title", "ASC"]],
      });
    },
    meal: async (parent, args) => {
      return await Meal.findByPk(args.id, {
        include: Category,
      });
    },
    categories: async () => {
      return await Category.findAll({ include: Meal });
    },
  },
  Mutation: {
    addMeal: async (parent, args) => {
      const { input } = args;
      await Meal.create(input);
      return { ok: true };
    },
    updateMeal: async (parent, { id, input }) => {
      await Meal.update(input, {
        where: { id },
      });
      return { ok: true };
    },
    
  },
};